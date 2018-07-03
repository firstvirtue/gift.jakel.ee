<template lang="html">
  <div class="wrap">
    <section class="fullpage-slide">
      1
    </section>
    <section class="fullpage-slide">
      2
    </section>
    <section class="fullpage-slide">
      3
    </section>
    <section class="fullpage-slide">
      4
    </section>
  </div>
</template>

<script>
import util from '~/assets/js/util.js';

export default {
  watch: {
    '$store.state.index': async function() {
      console.log(this.$store.state.index);
      await util.wait(1000);
      console.log('섹션 별 모션');
    }
  },
}
</script>

<style lang="css">
</style>
