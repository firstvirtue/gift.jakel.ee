<template>
  <div>
    <LayoutHeader/>
    <SideNav/>

    <nuxt/>

    <div class="loading-panel" :style="{ display: isLoadingPanelDisplay }">
      <h1 class="loading-title">loading..</h1>
    </div>
  </div>
</template>

<script>
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
      isLoadingPanelDisplay: 'block',
    }
  },
  watch: {
    $route: async function() {
      // FIXME: 페이지가 바뀐 상태를 알아 상태 변화를 통해 레이아웃을 업데이트 할 것.
      await util.wait(50);
      this.updateLayout();
    },
    '$store.state.index': async function() {
      this.updateLayout();
    },
    '$store.state.isLoading': function() {
      if(this.$store.state.isLoading) {
        this.isLoadingPanelDisplay = 'block';
      } else {
        this.isLoadingPanelDisplay = 'none';
      }
    },
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

      if(!this.isPaging && ! this.$store.state.isModal) {
        let self = this;
        let wrap = document.querySelector('.fullpage-wrapper');

        // FIXME: 더 정교하게 ..
        delta > 30 ? this.$store.commit('increaseIndex') : this.$store.commit('decreaseIndex');


        let pos = -this.$store.state.index * window.innerHeight;
        wrap.style.transform = `translate3d(0, ${pos}px, 0)`;
      }
    },
    setCurrent() {
      let slides = document.querySelectorAll('.fullpage-slide');
      slides.forEach((el, i)=> {
        if(i === this.$store.state.index) {
          el.classList.add('is-current');
        } else {
          el.classList.remove('is-current');
        }
      });
    },
    async updateLayout() {

      let slides = document.querySelectorAll('.fullpage-slide');
      let slide = slides[this.$store.state.index];

      // FIXME: go to util.js
      if ( (' ' + slide.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' white-tone ') > -1 ) {
        this.$store.commit('setTone', 'white-tone');
      } else {
        this.$store.commit('setTone', '');
      }

      await util.wait(500);

      this.setCurrent();
    }
  },
  mounted() {
    let self = this;
    util.receivedRouter = this.$router;

    // TODO: touch
    // TODO: drag
    window.addEventListener('wheel', function(e) {

      let delta = e.deltaY;

      self.updatePosition(delta);

      // FIXME: 유틸 함수 작동 안함

    });

    window.addEventListener('touchstart', function(e) {

      self.pos = e.changedTouches[0].pageY;
    });

    window.addEventListener('touchend', function(e) {
      let yPos = e.changedTouches[0].pageY;

      let delta = self.pos - yPos;
      self.updatePosition(delta);
    });


    if(this.$router.history.current.path === '/') {
      this.$router.push('/ko/precious-piece');
    } else {
      this.updateLayout();
    }

    // FIXME: wait for resource using promise
    // this.setCurrent();

    // util.resize(function() {
    //   self.windowHeight = window.innerHeight;
    //
    //   let slides = document.querySelectorAll('.fullpage-slide');
    //   slides.forEach(function(obj, i) {
    //     obj.style.height = `${self.windowHeight}px`;
    //     // obj.style.background = `white`;
    //     let wrap = obj.querySelector('.l-wrap');
    //     if(wrap) {
    //       wrap.style.height = `${self.windowHeight}px`;
    //     }
    //   });
    //
    //   self.$store.commit('setLength', slides.length);
    //
    // });

  },
}
</script>

<style lang="scss">
/* html, body {
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
} */

.loading {

  &-panel {
    @include full-pos;
    z-index: 100;
    background: $white;
  }

  &-title {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    font-family: $en;
    font-weight: lighter;
  }

}
</style>
