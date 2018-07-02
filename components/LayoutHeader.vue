<template lang="html">
  <div class="gnb">
    <button type="button" name="button" class="side-nav-button" @click="openSideNav()">
      <CircularProgress :stroke="stroke" :radius="radius" :progress="progress" />
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

    const stroke = 4;
    const radius = 40;

    return {
      stroke,
      radius,
    }

  },
  computed: {
    progress() {
      return (this.$store.state.index + 1) / this.$store.state.length * 100;
    }
  },
  methods: {
    openSideNav() {
      this.$store.commit('openSideNav');
    },
  }
}
</script>

<style lang="scss">
  .gnb {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    color: hotpink;
  }

  .side-nav-button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    &:active:enabled {
      transform: scale(0.97);
    }
  }
</style>
