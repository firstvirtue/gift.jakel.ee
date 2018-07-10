<template>
  <div>
    <LayoutHeader/>
    <SideNav/>
    <div class="fullpage-wrap">
      <nuxt/>
    </div>
  </div>
</template>

<script>
// import fullpage from '~/assets/js/fullpage.js';
import LayoutHeader from '~/components/LayoutHeader.vue';
import SideNav from '~/components/SideNav.vue';
import util from '~/assets/js/util.js';
import store from '~/store/index.js';

export default {
  components: {
    LayoutHeader,
    SideNav,
  },
  store,
  data() {
    return {
      windowHeight: 0,
      isPaging: false,
    }
  },
  watch: {
    '$store.state.index': async function() {
      let slides = document.querySelectorAll('.fullpage-slide');
      let slide = slides[this.$store.state.index];

      // FIXME: go to util.js
      if ( (' ' + slide.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' white-tone ') > -1 ) {
        this.$store.commit('setTone', 'white-tone');
      } else {
        this.$store.commit('setTone', '');
      }
    }
  },
  computed: {
    position() {
      return this.$store.state.index * this.windowHeight;
    }
  },
  methods: {
    updatePosition(delta) {
      // FIXME: 더 정교하게 ..
      if(Math.abs(delta) < 1) return;

      if(!this.isPaging) {
        let self = this;
        let wrap = document.querySelector('.fullpage-wrap');

        // FIXME: 더 정교하게 ..
        delta > 30 ? this.$store.commit('increaseIndex') : this.$store.commit('decreaseIndex');

        this.isPaging = true;
        TweenMax.to(wrap, 0.5, { y: -this.position, onComplete: () => {
          self.isPaging = false;

        }
      });
      }
    }
  },
  mounted() {
    let self = this;

    // fullpage.init();
    // let body = document.querySelector('body');
    // body.style.overflow = `hidden`;

    util.resize(function() {
      self.windowHeight = window.innerHeight;

      let slides = document.querySelectorAll('.fullpage-slide');
      slides.forEach(function(obj, i) {
        obj.style.height = `${self.windowHeight}px`;
        obj.style.background = `white`;
        let wrap = obj.querySelector('.l-wrap');
        if(wrap) {
          wrap.style.height = `${self.windowHeight}px`;
        }
      });

      self.$store.commit('setLength', slides.length);
    });

    // TODO: touch
    // TODO: drag
    window.addEventListener('wheel', function(e) {

      let delta = e.deltaY;

      self.updatePosition(delta);

      // FIXME: 유틸 함수 작동 안함

    });

    self.pos;

    window.addEventListener('touchstart', function(e) {

      self.pos = e.changedTouches[0].pageY;
    });

    window.addEventListener('touchend', function(e) {
      let yPos = e.changedTouches[0].pageY;

      let delta = self.pos - yPos;
      self.updatePosition(delta);
    });
  },
}
</script>

<style>
html, body {
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
