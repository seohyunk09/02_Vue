/* main.js 
index.html 에 추가되는 모듈
- main.js에 작성된 모든 것이 가능*/
import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
