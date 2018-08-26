import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next();
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
