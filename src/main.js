import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "./components/common/toast/index";
 
Vue.config.productionTip = false;
 
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(ElementUI);
Vue.use(toast);
 
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
