<template lang="html">
  <div class="gnb">
    <h1 class="gnb-title">삶의 소중한 부분들</h1>
    <button type="button" name="button" class="side-nav-button" @click="openSideNav()" :style="{borderColor: tone}">
      <CircularProgress class="circular-progress" :stroke="tone" :strokeWidth="strokeWidth" :radius="radius" :progress="progress" />
    </button>
  </div>
</template>

<script>
import CircularProgress from '~/components/CircularProgress.vue';

export default {
  components: {
    CircularProgress
  },
  data() {

    const strokeWidth = 4;
    const radius = 28;

    return {
      strokeWidth,
      radius,
    }

  },
  computed: {
    progress() {
      return (this.$store.state.index + 1) / this.$store.state.length * 100;
    },
    tone() {
      return this.$store.state.tone === 'white-tone' ? '#000' : '#fff';
    }
  },
  methods: {
    openSideNav() {
      this.$store.commit('openSideNav');
    },
  }
}
</script>

<style lang="scss" scoped>
  .gnb {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 10;
    color: hotpink;

    &-title {
      margin: 0;
      padding: 31px 30px;
      font-size: 1rem;
    }
  }

  .side-nav-button {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 0;
    border: none;
    border: 2px solid;
    border-radius: 50%;
    background: transparent;
    line-height: 0;
    cursor: pointer;

    transition: all 0.5s;

    &:active:enabled {
      transform: scale(0.97);
    }
  }

  .circular-progress {
    transform: scale(1.2);
  }
</style>
