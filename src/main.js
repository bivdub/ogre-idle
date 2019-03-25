import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import vuedraggable from "vuedraggable";
import nesteddraggable from "vuedraggable";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vuedraggable);
Vue.use(nesteddraggable);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
