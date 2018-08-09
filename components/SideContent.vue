<template lang="html">
  <aside class="side-content">

    <div class="side-dimmed"></div>
    <div class="container">
      <component v-for="item in contents" :is="item.tag" :key="item.id" :class="item.className">
        {{item.content}}
      </component>
    </div>
    <button type="button" class="close-side--btn" @click="closeContainer"></button>
    <span class="close-side--btn-content">닫기</span>
  </aside>
</template>

<script>
import util from '~/assets/js/util.js';

export default {
  props: {
    contents: Array
  },
  watch: {
    '$store.state.isModal': function() {
      let self = this;
      let html = document.querySelector('html');

      if(this.$store.state.isModal) {
        TweenMax.to(self.sideContent, 0.5, {
          display: 'block'
        });

        TweenMax.to(self.dimmed, 0.5, {
          opacity: 0.6,
        });

        TweenMax.to(self.container, 0.5, {
          y: '0',
          // opacity: 1,
          onComplete: ()=>{ html.classList.add('is-modal'); },
        });
      } else {
        html.classList.remove('is-modal');

        TweenMax.to(self.sideContent, 0.4, {
          display: 'none'
        });

        TweenMax.to(self.dimmed, 0.5, {
          opacity: 0,
        });

        TweenMax.to(self.container, 0.5, {
          y: self.containerHeight,
          // opacity: 0,
        });
      }


      // if(state.isModal) {
      //   html.classList.add('is-modal');
      // } else {
      //   html.classList.remove('is-modal');
      // }
    }
  },
  data() {
    return {
      containerHeight: '',
    }
  },
  methods: {
    openContainer() {
      this.$store.commit('setModal', true);
    },
    closeContainer() {
      this.$store.commit('setModal', false);
    }
  },
  mounted() {
    let self = this;
    util.resize(function() {
      self.windowHeight = window.innerHeight;
      self.containerHeight = `${self.windowHeight}px`;
    });

    this.sideContent = document.querySelector('.side-content');
    this.dimmed = document.querySelector('.side-dimmed');
    this.container = document.querySelector('.container');

    TweenMax.set(self.sideContent, {
      display: 'none'
    });

    TweenMax.set(self.dimmed, {
      opacity: 0,
    });

    TweenMax.set(self.container, {
      y: self.containerHeight,
      // opacity: 0,
    });
  }

}
</script>

<style lang="scss" src="~/assets/css/components/side-content.scss"></style>
