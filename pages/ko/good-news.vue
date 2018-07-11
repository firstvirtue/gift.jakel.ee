<template lang="html">
  <div class="wrap">
    <section class="fullpage-slide question">
      <img class="fullpage-slide-back-img question-back-img" src="~/assets/img/question-mark.jpg" alt="">
      <div class="l-wrap">
        <h1 class="h1 heading">죄로 인하여 관계가 끊어졌다는 말을 기억하시나요?</h1>
        <p>관계가 끊어져 죽음이 찾아왔다는 것도요.</p>
        <p>그렇다면 그 죄만 없다면 되겠군요.</p>
      </div>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">하지만 죄는 그냥 없앨 수 없습니다. 누군가는 그 값을 지불해야 합니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">어린아이가 장난을 치다가 창문을 깼다면, 용서해 줄 수는 있지만 누군가 창문을 고쳐야 하지 않을까요?</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">아마도 그 부모님이 대신 창문 값을 지불할 것입니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">이와 같습니다. 우리가 지불할 수 없는 죄 값을 하나님이 대신 치러 주신 것입니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">하지만 그 값은 창문처럼 값 싸지 않았습니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">그 아들을 희생한 너무나 값 비싼 대가였죠.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">우리의 죽음을 대신하여 죽어줄 한 사람이 필요했기에</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">죄 없는 하나님이 직접 그 한 사람이 되시는 방법을 택하셨습니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">예수님은 십자가에 못 박혀 죽음으로 인간의 죄를 대신하셨죠.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">그리고 나아가 예수님은 부활을 통해 죄로 인한 죽음의 저주를 완전히 끝내셨습니다.</h1>
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

<style lang="scss">
  .question {
    &-back-img {
      transform: translate(-22%, -14%) scale(0.78);
      transform-origin: 0 0;
    }

    .heading {
      top: 20%;
    }
  }
</style>
