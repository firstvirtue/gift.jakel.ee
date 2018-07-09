<template lang="html">
  <div class="wrap">
    <section class="fullpage-slide">
      <h1 class="h1 heading">죄로 인하여 관계가 끊어졌다는 말을 기억하시나요?</h1>
      <p>그렇다면 그 죄를 없애버리면 되겠군요.</p>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">하지만 죄는 그냥 없앨 수 없습니다. 누군가는 그 값을 지불해야 합니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">어린아이가 장난을 치다가 창문을 깼다면, 용서해 줄 수는 있지만 창문은 고쳐야 하지 않을까요?</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">아마도 그 부모님이 대신 창문 값을 지불할 것입니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">이와 같습니다. 우리가 지불할 수 없는 죄 값을 하나님이 대신 치러 주신 것입니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">그 아들을 희생해서 말이죠.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">이것이 복음. 예수 그리스도의 복음입니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">간단하지만 여기에 엄청난 비밀이 숨겨져 있답니다.</h1>
    </section>
    <section class="fullpage-slide">
      <h1 class="h1 heading">이것은 하나의 소식입니다. 아주 기쁜 소식말이죠.</h1>
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
