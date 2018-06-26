<template lang="html">
  <div class="wrap">
    <section class="fullpage-slide intro">
      what-is-..?
    </section>
    <section class="fullpage-slide">
      what-is-..2?
    </section>
    <section class="fullpage-slide">
      what-is-..3?
    </section>
  </div>
</template>

<script>

export default {
  components: {

  },
  computed: {
    arrangeMotion() {
      console.log(this.$store.state.index);
      return this.$store.state.index;
    }
  }
}
</script>

<style lang="scss">
  .wrap {
    .intro {
      color: #eee;
    }
  }
</style>
