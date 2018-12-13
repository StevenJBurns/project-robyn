/* Vue and Vuex Dependencies */
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mood: null
  },
  mutations: {
    changeMood: () => {},
    completeMood: () => {}
  },
  actions: {
    
  }
});
