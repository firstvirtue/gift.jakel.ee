<template>
  <div>
    <LayoutHeader/>
    <SideNav/>
    <!-- <div class="fullpage-wrap" :style="{ transform: 'translateY(-' + position + 'px)' }"> -->
    <div class="fullpage-wrap">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import fullpage from '~/assets/js/fullpage.js';
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
  computed: {
    position() {
      return this.$store.state.index * this.windowHeight;
    }
  },
  methods: {
    updatePosition(delta) {
      if(!this.isPaging) {
        let self = this;
        let wrap = document.querySelector('.fullpage-wrap');
        // console.log(wrap.style.transform);

        delta > 30 ? this.$store.commit('increaseIndex') : this.$store.commit('decreaseIndex');

        this.isPaging = true;
        TweenMax.to(wrap, 0.5, { y: -this.position, onComplete: () => { self.isPaging = false } });
      }
    }
  },
  mounted() {
    let self = this;

    // fullpage.init();
    let body = document.querySelector('body');
    body.style.overflow = `hidden`;

    util.resize(function(){
      self.windowHeight = window.innerHeight;

      let slides = document.querySelectorAll('.fullpage-slide');
      slides.forEach(function(obj, i){
        obj.style.height = `${self.windowHeight}px`;
        obj.style.background = `white`;
      });

      self.$store.commit('setLength', slides.length);
    });

    // TODO: touch
    // TODO: drag
    window.addEventListener('wheel', function(e) {

      let delta = e.deltaY;

      // delta > 30 ? self.index++ : self.index--;
      // delta > 30 ? self.$store.commit('increaseIndex') : self.$store.commit('decreaseIndex');
      self.updatePosition(delta);

      // FIXME: 유틸 함수 작동 안함
      // util.debounced(1000, function(){
      //   delta > 30 ? self.index++ : self.index--;
      //   console.log(self.index);
      // });

    });

    self.pos;

    window.addEventListener('touchstart', function(e){

      self.pos = e.changedTouches[0].pageY;
    });

    window.addEventListener('touchend', function(e){
      let yPos = e.changedTouches[0].pageY;

      let delta = self.pos - yPos;
      // delta > 30 ? self.$store.commit('increaseIndex') : self.$store.commit('decreaseIndex');
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

/* .fullpage-wrap {
  transition: all 0.5s;
} */
</style>
