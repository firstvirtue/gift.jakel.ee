<template lang="html">
  <div class="wrap">

    <section class="fullpage-slide intro">
      <img class="intro-back-img" src="~/assets/img/portrait-3056827.jpg" alt="">
      <h1 class="h1 heading" lang="ko">
        우리에게 가장 소중한 것은 무엇일까요?
        <!-- 당신에게 가장 소중한 것은 무엇인까요? -->
      </h1>
    </section>

    <section class="fullpage-slide important-thing white-tone">

      <div class="important-item">
        돈
      </div>
      <div class="important-item">
        명예
      </div>
      <div class="important-item">
        다른 사람에게 인정받음
      </div>
      <div class="important-item">
        섹스
      </div>
      <div class="important-item">
        쾌락
      </div>
      <div class="important-item">
        자아실현
      </div>
      <div class="important-item">
        행복
      </div>
      <div class="important-item">
        가족
      </div>
      <div class="important-item">
        꿈
      </div>
      <div class="important-item">
        의미
      </div>
      <div class="important-item">
        아파트
      </div>

      <br>
      <h1>우리는 행복하고 의미있는 삶을 살길 원합니다.</h1>
      <h2>그래서 위와 같은 것들을 필요로 합니다.</h2>

    </section>

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading">이 모든 것을 가진다면 우리가 원하는 만족스런 삶을 누릴 수 있을까요?</h1>
      <!-- <SideContent :contents="subContents"></SideContent> -->
    </section>

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading">우리는 종종 봅니다. 모든 것을 다 가진 것처럼 보이는 사람들도 우울증을 가지고 심지어 자살까지 하는 것을요.</h1>
    </section>

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading">분명 우리 영혼은 저런 것들 만으로 채울 수 없음에 분명합니다.</h1>
    </section>

    <section class="fullpage-slide white-tone">
      <h1 class="h1 heading"><span>여전히 공허함이 느껴집니다.</span> <br> <span>왜 그럴까요?</span></h1>

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
      subContents: [
        // {id:'1', tag: 'h2', content: '선물'},
        // {id:'2', tag: 'p', content: `그럴수가`},
        // {id:'3', tag: 'p', content: '그럴수가2'},
      ]
    }
  },
  watch: {
    '$store.state.index': async function() {
      console.log(this.$store.state.index);
      let slides = document.querySelectorAll('.fullpage-slide');
      let slide = slides[this.$store.state.index];

      // FIXME: go to util.js
      if ( (' ' + slide.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' white-tone ') > -1 ) {
        this.$store.commit('setTone', 'white-tone');
      } else {
        this.$store.commit('setTone', '');
      }

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
  .wrap {
    .intro {
      color: #eee;
    }
  }

  .intro {

    &-back-img {
      position: absolute;
      transform: translateX(-14%) scale(0.66);
      transform-origin: 0 0;
    }

  }

  .heading {
    position: relative;
    top: 32%;
    margin: 0 1em;
    font-size: 32px;
    color: white;
    font-weight: lighter;
    line-height: 1.2;
  }

  .white-tone {
    .heading {
      color: black;
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
