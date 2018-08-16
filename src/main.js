import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Foo = () => import('./foo')
const HelloWorld = () => import('./components/HelloWorld')

const routes = [
  { path: '/foo', component: Foo, name:'foo' },
  { path: '/', component: HelloWorld, name:'HelloWorld' },
]

const router = new VueRouter({
  routes
})

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics,{
    id () {
    return 'UA-474915333-5'
    },
    autoTracking:{
        screenview: true
    },
    router
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
