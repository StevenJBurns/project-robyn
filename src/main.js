/* Vue, Vuex and Router Dependencies */
import Vue from "vue";
import store from "./store";
import router from "./router";

/* Local Dependencies */
import App from "./App.vue";

/* Service Worker for PWA */
import "./registerServiceWorker";


Vue.config.productionTip = false

new Vue({ router, store, render: h => h(App) }).$mount('#vue-root');
