import app from '~/createApp'
import { VaInput, VaButton, VaSelect, VaSidebar, VaSidebarItem, VaSidebarItemContent, VaSidebarItemTitle, VaIcon } from 'vuestic-ui'
console.log('VaSidebar', VaSidebar);
app.component('va-sidebar', VaSidebarItem)
app.component('va-sidebar-item-content', VaSidebarItemContent)
app.component('va-sidebar-item-title', VaSidebarItemTitle)
app.component('va-icon', VaIcon)
// [
//   VaInput,
//   VaButton,
//   VaSelect,
//   VaSidebar,
//   VaSidebarItem,
//   VaSidebarItemContent,
//   VaSidebarItemTitle,
//   VaIcon
// ].forEach(Component => {
//   app.component(Component.name, Component)
// })
