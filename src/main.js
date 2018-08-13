import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
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
  render: h => h(App)
}).$mount('#app')
