import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import i18n from './language/i18n.ts';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.ts';

createApp(App).use(Vant).use(i18n).use(ElementPlus).use(router).mount('#app')
