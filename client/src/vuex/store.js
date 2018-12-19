/* Vue and Vuex Dependencies */
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    currentMood: null
  },
  getters: {

  },
  mutations: {
    changeMood: () => {},
    completeMood: () => {}
  },
  actions: {
    changeMood: () => {},
    completeMood: () => {}
  }
});
