require('./bootstrap');

window.Vue = require('vue');
import router from './routes'
//vue.use(VueRouter)
Vue.component('app', require('./components/App.vue').default);

const app = new Vue({

    el: '#app',
    router
});