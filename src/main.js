import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import axios from './axios'
import { messages } from './components/common/i18n';

// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/theme-green/index.css'; // 浅绿色主题

import './assets/css/icon.css';
import './assets/icons'
import './components/common/directives';

// import Cookies from 'js-cookie';

import 'babel-polyfill';
import uploader from 'vue-simple-uploader';

import global from './globalFun'

Vue.use(uploader);
Vue.prototype.$axios = axios

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});

// require('./mock.js')
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
