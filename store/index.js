import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    strict: true,

    state: {
      index: 0,
      length: 0,
    },

    mutations: {
      increaseIndex(state) {
        if(state.index < state.length - 1)
          state.index++;
      },
      decreaseIndex(state) {
        if(state.index > 0)
          state.index--;
      },
      setLength(state, count) {
        state.length = count;
      }
    }
  })
}

export default store;
