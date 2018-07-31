<template lang="html">
  <div class="wrap">
    <div class="fullpage-wrapper">
      <section class="fullpage-slide us base">
        <img class="fullpage-slide-back-img us-back-img" data-src="/img/us.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">그렇다면 우리가 할 수 있는 것은 무엇일까요?</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">그것은 선택하는 것입니다.</h1>
          <p class="paragraph">예수님이 내 죄를 위해 죽으시고 다시 사신 일을요.</p>
        </div>
      </section>
      <section class="fullpage-slide road white-tone base">
        <img class="fullpage-slide-back-img road-back-img" data-src="/img/road.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">그것이 끊어진 하나님과의 관계에서 회복되는 유일한 길 입니다.</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">그를 믿음으로 하나님과의 관계는 회복되고 다시 영원한 삶도 주어질 것입니다.</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">모든 것은 점점 비극 이전으로 되돌아갈 것입니다. 공허함도 불안감도 권태로움도 없었던 그 때로 말이죠.</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">지금 당장 받아들이기 어려우실수도 있습니다. 하지만 좋습니다.</h1>
        </div>
      </section>
      <section class="fullpage-slide peoples white-tone base">
        <img class="fullpage-slide-back-img peoples-back-img" data-src="/img/peoples.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">당신의 삶의 여정 가운데 <br> 또 어디선가 살고 있는 그리스도인이 <br>당신에게 전해 줄 것입니다.</h1>
        </div>
      </section>
      <section class="fullpage-slide jesus white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">예수님을요</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">그 때면 좀 더 알게 되지 않을까요? 하나님께서는 당신을 향한 계획이 있으셨고, 항상 사랑하고 계셨다는 것을요.</h1>
        </div>
      </section>
      <section class="fullpage-slide promise black-tone">
        <div class="l-wrap">
          <h1 class="h1 heading"><span class="f">약속합니다.</span> <br><span class="l">예수님의 이름으로</span></h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ResourceLoader from '~/assets/js/ResourceLoader.js';
import util from '~/assets/js/util.js';

export default {
  mounted() {
    ResourceLoader.load( async () => {
      util.initLayout(this);
      util.initPagePosition(this);
      // load complete!
      this.$store.commit('setLoading', false);
      this.$store.commit('setTitle', '완전한 삶');
      this.$store.commit('setPage', 4);

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
  .us {
    &-back-img {
      transform: translate(-8%, 0) scale(0.63);
      transform-origin: 0 0;
    }

    .heading {
      top: 50%;
      margin-top: -30px;
    }
  }

  .road {
    &-back-img {
      width: 100%;
      transform: translate3d(0, 36%, 0);
    }

    .heading {
      top: 67%;
    }

  }

  .peoples {
    &-back-img {
      width: 100%;
      transform: translate3d(0, 40%, 0);
    }

    .heading {
      top: 68%;
    }

  }

  .jesus {
    .heading {
      top: 50%;
      margin-top: -30px;
      text-align: center;
    }
  }

  .promise {
    .heading {
      top: 50%;
      text-align: center;
      margin-top: -30px;

      .f, .l {
        opacity: 0;
        transform: translateY(20%);
        transition: 1.5s all cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }

  .is-current.promise {
    .heading {
      .f, .l {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
      }
      .l {
        transition-delay: 1.1s;
      }
    }
  }

</style>
