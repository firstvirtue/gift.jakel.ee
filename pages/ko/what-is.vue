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
  watch: {
    '$store.state.index': function() {
      console.log(this.$store.state.index);
      console.log('섹션 별 모션, wait 기능 추가 해야함');
    }
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
