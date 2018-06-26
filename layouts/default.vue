<template>
  <div>
    <LayoutHeader/>
    <SideNav/>
    <div class="wrap" :style="{ transform: 'translateY(' + position + 'px)' }">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import fullpage from '~/assets/js/fullpage.js';
import LayoutHeader from '~/components/LayoutHeader.vue';
import SideNav from '~/components/SideNav.vue';

export default {
  components: {
    LayoutHeader,
    SideNav,
  },
  data() {
    return {
      index: 1,
      styleObject: {
        yPosition: 300
      },
    }
  },
  computed: {
    position() {
      return this.index * 400;
    }
  },
  mounted() {
    fullpage.init();
    let self = this;

    window.addEventListener('wheel', function(e){
      self.index = 2;
    });
  },
}
</script>

<style>
.wrap {
  transition: all 0.5s;
}
</style>
