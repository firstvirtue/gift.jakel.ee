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
export default {
  watch: {
    '$store.state.index': function() {
      console.log(this.$store.state.index);
      console.log('섹션 별 모션, wait 기능 추가 해야함');
    }
  },
}
</script>

<style lang="css">
</style>
