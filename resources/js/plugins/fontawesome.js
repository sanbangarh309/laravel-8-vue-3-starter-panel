import app from '~/createApp'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser, faLock, faSignOutAlt, faCog, faChevronRight, faChevronDown, faTachometerAlt, faPowerOff
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faUser, faLock, faSignOutAlt, faCog, faGithub, faTachometerAlt, faChevronRight, faChevronDown, faPowerOff
)

app.component('font-awesome-icon', FontAwesomeIcon)
