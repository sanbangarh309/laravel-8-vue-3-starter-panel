import { createApp, reactive } from 'vue';
import App from '~/components/App.vue'
const app = createApp(App);
app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

export default app
