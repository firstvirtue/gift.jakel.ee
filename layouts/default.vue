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
      // console.log('$route');
      // this.updateLayout();
    },
    '$store.state.index': async function() {
      // console.log('$store.state.index');
      // this.updateLayout();
    },
    '$store.state.isLoading': function() {
      if(this.$store.state.isLoading) {
        this.isLoadingPanelDisplay = 'block';
      } else {
        this.isLoadingPanelDisplay = 'none';
      }
    },
    '$store.state.isModal': function() {
      if(this.$store.state.isModal) {
        window.removeEventListener('touchmove', this.preventTouch, {passive: false});
      } else {
        window.addEventListener('touchmove', this.preventTouch, {passive: false});
        util.setLayoutSize();
        util.setLayoutPosition(this);
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

      if(!this.isPaging && !this.$store.state.isModal) {
        console.log('delta: ', delta);

        this.isPaging = true;
        setTimeout(() => this.isPaging = false, 800);

        let self = this;
        let wrap = document.querySelector('.fullpage-wrapper');

        // FIXME: 더 정교하게 ..
        delta > 0 ? this.$store.commit('increaseIndex') : this.$store.commit('decreaseIndex');


        let pos = -this.$store.state.index * window.innerHeight;
        wrap.style.transform = `translate3d(0, ${pos}px, 0)`;
      }
    },
    preventTouch(e) {
      // [TODO] 조건에 따른 스크롤 방지
      e.preventDefault();
      e.stopPropagation();
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

    // window.addEventListener('touchmove', function(e) {
    //   // [TODO] 조건에 따른 스크롤 방지
    //   e.preventDefault();
    //   e.stopPropagation();
    //
    // }, {passive: false});
    window.addEventListener('touchmove', this.preventTouch, {passive: false});

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
