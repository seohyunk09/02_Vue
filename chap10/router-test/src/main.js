import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; /* index 가 생략되어 있는 경우가 많아서! 자동으로 연결되는 경우가 많음 */

const app = createApp(App);
app.use(router);
app.mount('#app');
