<template lang="html">
  <div class="wrap">
    <!-- 지워 -->
    <section class="fullpage-slide intro">
      <p class="p-ko">
        코카콜라는 현대인의 식음료 문화에 깊이 침투해 있습니다.
      </p>
      <p class="p-en" lang="en">essential oils handbook</p> 
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
import util from '~/assets/js/util.js';

export default {
  components: {
    SubContent
  },
  watch: {
    '$store.state.index': async function() {
      console.log(this.$store.state.index);
      await util.wait(1000);
      console.log('섹션 별 모션');
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
  .wrap {
    .intro {
      color: #eee;
    }
  }

  .p {
    &-ko {
      color: #111;
      font-family: 'NotoSans';
      font-size: 40px;
      font-weight: lighter;
    }

    &-en {
      color: #111;
      font-family: 'Roboto';
      font-size: 40px;
      text-transform: uppercase;
      font-weight: lighter;
    }
  }
</style>
