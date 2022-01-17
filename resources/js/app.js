import store from '~/store'
import router from '~/router'
import '~/plugins/bootstrap-vue'

import app from '~/createApp'

import '~/components'
import '~/plugins'

app.use(store).use(router).mount("#app")
