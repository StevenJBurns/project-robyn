/* Vue, Vuex and Vue Router and Vuetify Dependencies */
import Vue from "vue";
import store from "./vuex/store";
import router from "./router/router";
import "./plugins/vuetify";

/* Local Dependencies */
import App from "./app/App.vue";

/* Service Worker for PWA */
import "./registerServiceWorker";


Vue.config.productionTip = false

new Vue({ router, store, render: h => h(App) }).$mount('#vue-root');
