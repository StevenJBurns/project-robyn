/* Vue, Vuex and Router Dependencies */
import Vue from "vue";
import './plugins/vuetify'
import store from "./vuex/store";
import router from "./router/router";

/* Local Dependencies */
import App from "./app/App.vue";

/* Service Worker for PWA */
import "./registerServiceWorker";


Vue.config.productionTip = false

new Vue({ router, store, render: h => h(App) }).$mount('#vue-root');
