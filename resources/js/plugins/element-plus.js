/** Element Plus Components **/
import { ElButton } from 'element-plus'
import app from '~/createApp'

[
  ElButton
].forEach(Component => {
  app.component(Component.name, Component)
})
