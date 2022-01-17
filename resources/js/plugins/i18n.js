import { createApp } from 'vue'
import store from '~/store'
import { createI18n } from 'vue-i18n'

const app = createApp({})

const i18n = createI18n({
  locale: 'en',
  messages: {}
})

// app.use(i18n)

/**
 * @param {String} locale
 */
export async function loadMessages (locale) {
  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const messages = await import(/* webpackChunkName: '' */ `~/lang/${locale}`)
    i18n.setLocaleMessage(locale, messages)
  }

  if (i18n.locale !== locale) {
    i18n.locale = locale
  }
}

;(async function () {
  // await loadMessages(store.getters['lang/locale'])
})()

export default i18n
