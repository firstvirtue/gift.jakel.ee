<template lang="html">
  <div class="wrap">
    <div class="fullpage-wrapper">
      <section class="fullpage-slide intro base">
        <img class="fullpage-slide-back-img intro-back-img" data-src="/img/portrait.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading" lang="ko">
            우리에게 가장 소중한 것은 무엇일까요?
          </h1>
        </div>
      </section>

      <section class="fullpage-slide white-tone important-thing base">
        <div class="l-wrap">

          <h1 class="h1 heading">우리는 행복하고 의미있는 삶을 살길 원합니다.</h1>
          <p class="paragraph">그래서 삶의 조각들을 채우며 <br> 그에 따른 수고를 마다하지 않습니다.</p>

        </div>

      </section>

      <!-- NOTE: 뿅뿅 나타난 오브젝트가 다음 씬에서 생명 라인에 쌓임. 그리고 텍스트 표현 후 생명 라인이 없어지면서 모두 떨어짐 -->

      <section class="fullpage-slide white-tone life base">
        <div class="l-wrap">
          <h1 class="h1 heading">하지만 <em class="life-word">생명</em>이 없다면 이 모든 것이 무슨 의미가 있을까요?</h1>
          <p class="paragraph">마치 모래성처럼 허무할 뿐입니다.</p>
        </div>
      </section>

      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">또는 몇몇 가지를 이룬다 한들 지속적인 만족이 있던가요?</h1>
          <p class="paragraph">우리의 채워지지 않는 욕심과 공허함만 발견할 뿐입니다. <br>때로는 권태롭기도 합니다.</p>
        </div>
      </section>

      <section class="fullpage-slide where-we base">
        <img class="fullpage-slide-back-img where-we-back-img" data-src="/img/baby.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">우리에게 가장 소중한 것은 무엇일까요?</h1>
          <!-- <p class="paragraph">우리의 영혼은 어디로부터 와서 어디로 가는 걸까요?</p> -->
        </div>
      </section>
    </div>
    <LifePiece ref="lifePiece"></LifePiece>

  </div>
</template>

<script>
import SideContent from '~/components/SideContent.vue';
import LifePiece from '~/components/LifePiece.vue';

import util from '~/assets/js/util.js';
import ResourceLoader from '~/assets/js/ResourceLoader.js';

export default {
  components: {
    SideContent,
    LifePiece
  },
  data() {
    return {
      subContents: [

      ]
    }
  },
  watch: {
    '$store.state.index': async function() {

      util.updateLayout(this);

      let life = document.querySelector('.life-word');

      switch (this.$store.state.index) {
        case 1:

          this.$refs.lifePiece.openPanel();
          this.$refs.lifePiece.unslidePanel();
          life.classList.remove('is-hide');

          break;
        case 2:
          this.$refs.lifePiece.openPanel();
          this.$refs.lifePiece.slidePanel();


          await util.wait(500);
          life.classList.add('is-hide');
          //
          // this.$refs.lifePiece.breakPanel();
          break;

        default:
          this.$refs.lifePiece.closePanel();
          life.classList.remove('is-hide');

          break;

      }
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
  mounted() {
    ResourceLoader.load( async () => {
      util.initLayout(this);
      util.initPagePosition(this);
      util.updateLayout(this);

      this.$store.commit('setLoading', false);
      this.$store.commit('setTitle', '삶의 소중한 부분들');
      this.$store.commit('setPage', 1);

      // this.$store.commit('setIndex', 0);
      //
      // await util.wait(100);
      // let wrap = document.querySelector('.fullpage-wrapper');
      // wrap.style.transition = 'all 0.8s ease';
    });
  },
  created() {
    this.$store.commit('setLoading', true);
  },
}
</script>

<style lang="scss">
  .wrap {

    overflow: hidden;

    .intro {
      color: #eee;
    }
  }

  .intro {
    &-back-img {
      transform: translateX(-14%) scale(0.66);
      transform-origin: 0 0;
    }

    .heading {
      top: 21%;
    }
  }

  .life {
    .heading {
      top: 82%;
    }

    .paragraph {
      top: 82%;
    }

    &-word {
      transition: opacity .5s;

      &.is-hide {
        transition: opacity 3s;
        opacity: 0.12;
      }
    }
  }

  .where-we {
    &-back-img {
      transform: translate(-5%, 0) scale(0.391);
      transform-origin: 0 0;
    }

    .heading {
      top: 21%;
    }

    .paragraph {
      top: 8%;
    }
  }

  // .p {
  //   &-ko {
  //     color: #111;
  //     font-family: 'NotoSans';
  //     font-size: 40px;
  //     font-weight: lighter;
  //   }
  //
  //   &-en {
  //     color: #111;
  //     font-family: 'Roboto';
  //     font-size: 40px;
  //     text-transform: uppercase;
  //     font-weight: lighter;
  //   }
  // }
</style>
