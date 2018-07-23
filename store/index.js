import Vue from 'vue';
import Vuex from 'vuex';
import util from '~/assets/js/util.js';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    strict: true,

    state: {
      index: 0,
      length: 0,
      page: 0,
      isOpenedSideNav: false,
      tone: '',
      title: '',
      isModal: false,
    },

    mutations: {
      increaseIndex(state) {
        if(state.index < state.length - 1) {
          state.index++;
        } else {
          util.movePage(state.page + 1);
        }
      },
      decreaseIndex(state) {
        if(state.index > 0) {
          state.index--;
        } else {
          util.movePage(state.page - 1);
        }
      },
      setLength(state, count) {
        state.length = count;
      },
      openSideNav(state) {
        state.isOpenedSideNav = true;
      },
      closeSideNav(state) {
        state.isOpenedSideNav = false;
      },
      setTone(state, tone) {
        state.tone = tone;
      },
      setTitle(state, title) {
        state.title = title;
      },
      setPage(state, page) {
        state.page = page;
      },
      setModal(state, isModal) {
        state.isModal = isModal;
      },
    }
  })
}

export default store;
