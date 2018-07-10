<template lang="html">
  <div class="wrap">

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading">하나님은 본래 교제를 나누기 위해 자기 형상대로 인간을 창조하셨습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">영원히 모든 것을 누리는 완벽한 상태였죠.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">하지만 한 사람의 죄가 하나님과의 관계를 끊었습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">생명의 근원이신 하나님과의 단절로 영원하던 인간의 삶이 유한해 졌습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">죽음이 찾아왔죠.</h1>
      <p>마치 꺾여진 꽃이 며칠 내에 시들듯</p>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">그 죄는 그의 자손 모두에게 유전되었습니다.</h1>
      <p>그리고 그 죄는 여기 있는 우리에게도 영향을 미칩니다.</p>
      <p>우리안에는 .. 죄가 있습니다.</p>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">공허, 불안.. 하나님과 함께 있을 때는 느껴보지 못했던 감정이 인간을 에워 쌓았습니다.</h1>
    </section>

    <!-- <section class="fullpage-slide">
      <h1 class="h1 heading">역사적으로 인간은 구원, 즉 신에 다다르고자 종교를 만들기도 하고</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">선행과 도덕을 실천하거나, 철학등으로 진리를 연구하기도 했습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">그러나 죽음을 막아주진 못했죠 어느것도 구원에 이르게 하지 못했습니다.</h1>
    </section> -->

    <section class="fullpage-slide">
      <h1 class="h1 heading">우리는 죽어가고 있습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">이에 하나님은 한 가지 방법을 사용했습니다.</h1>
    </section>

    <section class="fullpage-slide">
      <h1 class="h1 heading">바로 하나님의 아들 예수 그리스도를 통해서 말이죠.</h1>
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
