import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from "./routes";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 

Vue.use(VueRouter);

 // eslint-disable-next-line no-unused-vars
const router = new VueRouter({
  routes : routes,
  mode : 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
