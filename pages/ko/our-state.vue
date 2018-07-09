<template lang="html">
  <div class="wrap">

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading">하나님은 본래 교제를 나누기 위해 자기 형상대로 인간을 창조하셨습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">모든 것을 누리는 완벽한 상태였죠.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">하지만 한 사람의 죄가 하나님과의 관계를 끊었습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">그 죄는 그의 자손 모두에게 유전되었습니다.</h1>
      <p>그리고 그 죄는 여기 있는 우리에게도 영향을 미칩니다.</p>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">우리에게 무언가 채워지지 않는 갈망이 있는 것은 하나님과의 관계가 끊어졌기 때문입니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">그 갈망을 채우기 위해 스스로 종교를 만들기도 합니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">하나님의 형상이 아직 남아 있기에 우리는 선하게 살려고 노력합니다.</h1>
      <p>하지만 뜻대로 잘 되지 않지요..</p>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">우리는 그저 죽어가고 있습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">이에 하나님께서는 한 가지 방법을 사용하셨습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">바로 하나님의 아들 예수 그리스도를 통해 그 관계를 회복하시는 방법 말이죠.</h1>
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
