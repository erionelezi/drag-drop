import Vue from "vue";
import App from "./App.vue";
import Message from "./Message.vue";
import Hello from "./components/Hello.vue";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/less/font-awesome.less";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
{path: '/' , component:Hello },
{path: '/finished' , component:Message }
];
const router = new VueRouter ({
  routes
});

Vue.component('mesazhi',Message); 

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
