<template lang="html">
  <div class="wrap">

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading">하나님은 본래 교제를 나누기 위해 자기 형상대로 인간을 창조하셨습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">모든 것을 누리는 완벽한 상태였죠.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">모든 것을 누리는 완벽한 상태였죠.</h1>
    </section>

  </div>
</template>

<script>
import SideContent from '~/components/SideContent.vue';
import util from '~/assets/js/util.js';

export default {
  components: {
    SideContent
  },
  data() {
    return {

    }
  },
  watch: {
    '$store.state.index': async function() {
      console.log(this.$store.state.index);
      await util.wait(1000);

    }
  },
  computed: {
    arrangeMotion() {
      console.log(this.$store.state.index);
      return this.$store.state.index;
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">

</style>
