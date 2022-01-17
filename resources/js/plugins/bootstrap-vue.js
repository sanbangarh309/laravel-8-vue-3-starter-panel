/** Register Bootstrap Components **/
import { BDropdown, BDropdownItem, BCard, BCardGroup, BListGroup, BListGroupItem, BContainer  } from 'bootstrap-vue-3'
import app from '~/createApp'

[
  BCard,
  BDropdown,
  BDropdownItem, BCardGroup, BListGroup, BListGroupItem, BContainer
].forEach(Component => {
  app.component(Component.name, Component)
})
