import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Info',
            component: require('./views/Info')
        },
        {
            path: '/Conte',
            name: 'Conte',
            component: require('./views/Conte')
        },
        {
            path: '/Comuni',
            name: 'Comuni',
            component: require('./views/Comuni')
        },
        {
            path: '/Ayuda',
            name: 'Ayuda',
            component: require('./views/Ayuda')
        },
        {
            path: '/Dere',
            name: 'Dere',
            component: require('./views/Dere')
        },
        {
            path: '/Mision',
            name: 'Mision',
            component: require('./views/Mision')
        }


    ],
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})