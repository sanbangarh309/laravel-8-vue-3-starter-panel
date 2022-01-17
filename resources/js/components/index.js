import Card from './Card.vue'
import VButton from './Button.vue'
import app from '~/createApp'
import { HasError, AlertError, AlertSuccess } from 'vform/components/bootstrap5'

app.component('card', Card)
app.component('v-button', VButton)
app.component('has-error', HasError)
app.component('alert-error', AlertError)
app.component('alert-success', AlertSuccess)
