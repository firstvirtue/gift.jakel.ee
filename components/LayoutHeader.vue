<template lang="html">
  <div class="gnb">
    <CircularProgress :stroke="stroke" :radius="radius" :progress="progress" />
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
    const progress = 40;

    return {
      stroke,
      radius,
      progress
    }

  },
  // computed: {
  //
  // }
}
</script>

<style lang="css">
  .gnb {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    color: hotpink;
  }
</style>
