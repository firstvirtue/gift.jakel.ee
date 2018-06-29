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
      <SubContent></SubContent>
    </section>
  </div>
</template>

<script>
import SubContent from '~/components/SubContent.vue';

export default {
  components: {
    SubContent
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
