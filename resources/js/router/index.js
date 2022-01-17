import app from '~/createApp'
import store from '~/store'
import { createMetaManager } from 'vue-meta'
import routes from './routes'
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { sync } from 'vuex-router-sync'

app.use(createMetaManager())

let isServer=false

let history = isServer ? createMemoryHistory() : createWebHistory()

const router = createRouter({
  history,
  routes
})

router.beforeEach(beforeEach)

// The middleware for every page of the application.
const globalMiddleware = ['check-auth']

// Load middleware modules dynamically.
const routeMiddleware = resolveMiddleware(
  require.context('~/middleware', false, /.*\.js$/)
)

app.use(router)

sync(store, router)

export default router

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach (to, from, next) {
  let components = []

  try {
    // Get the matched components and resolve them.
    components = await resolveComponents(
      to.matched
    )
  } catch (error) {
    if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
      window.location.reload(true)
      return
    }
  }

  if (components.length === 0) {
    return next()
  }

  // Start the loading bar.
  // if (components[components.length - 1].loading !== false) {
  //   app.$nextTick(() => router.app.$loading.start())
  // }

  // Get the middleware for all the matched components.
  const middleware = getMiddleware(components)

  // Load async data for all the matched components.
  await asyncData(components)

  // Call each middleware.
  callMiddleware(middleware, to, from, (...args) => {
    next(...args)
  })

}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents (components) {
  return Promise.all(components.map(component => {
    return typeof component === 'function' ? component() : component
  }))
}

/**
 * Merge the the global middleware with the components middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */
function getMiddleware (components) {
  const middleware = [...globalMiddleware]

  components.filter(c => c.middleware).forEach(component => {
    if (Array.isArray(component.middleware)) {
      middleware.push(...component.middleware)
    } else {
      middleware.push(component.middleware)
    }
  })
  return middleware
}

/**
 * @param  {Array} components
 * @return {Promise<void>
 */
async function asyncData (components) {
  for (let i = 0; i < components.length; i++) {
    const component = components[i]

    if (!component.asyncData) {
      continue
    }

    const dataFn = component.data

    try {
      const asyncData = await component.asyncData()

      component.data = function () {
        return {
          ...(dataFn ? dataFn.apply(this) : {}),
          ...asyncData
        }
      }
    } catch (e) {
      component.layout = 'error'

      console.error('Failed to load asyncData', e)
    }
  }
}

function callMiddleware (middleware, to, from, next) {
  const stack = middleware.reverse()

  const _next = (...args) => {
    // Stop if "_next" was called with an argument or the stack is empty.
    if (args.length > 0 || stack.length === 0) {
      if (args.length > 0) {
        // app.$loading.finish()
      }

      return next(...args)
    }

    const { middleware, params } = parseMiddleware(stack.pop())
    if (typeof middleware === 'function') {
      middleware(to, from, _next, params)
    } else if (routeMiddleware[middleware]) {
      routeMiddleware[middleware](to, from, _next, params)
      next();
    } else {
      throw Error(`Undefined middleware [${middleware}]`)
    }
  }

  _next()
}

/**
 * @param  {String|Function} middleware
 * @return {Object}
 */
function parseMiddleware (middleware) {
  if (typeof middleware === 'function') {
    return { middleware }
  }

  const [name, params] = middleware.split(':')

  return { middleware: name, params }
}

/**
 * @param  {Object} requireContext
 * @return {Object}
 */
function resolveMiddleware (requireContext) {
  return requireContext.keys()
    .map(file =>
      [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((guards, [name, guard]) => (
      { ...guards, [name]: guard.default }
    ), {})
}
