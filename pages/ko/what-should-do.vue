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
          <h1 class="h1 heading">그것은 예수님을 <br>믿는 것입니다.</h1>
          <p class="paragraph">예수님이 내 죄를 위해 죽으시고 다시 사신 일을 믿는 것이죠.</p>
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
        <ModalButton class="black" :content="whyGodBtnContent" @event="openWhyGodContainer"></ModalButton>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">모든 것은 점점 비극 이전으로 되돌아갈 것입니다. <br>공허함도 불안감도 권태로움도 없었던 그 때로 말이죠.</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">지금 당장 받아들이기 어려우실 수도 있습니다. <br>하지만 좋습니다.</h1>
        </div>
      </section>
      <section class="fullpage-slide peoples white-tone base">
        <img class="fullpage-slide-back-img peoples-back-img" data-src="/img/peoples.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">또 어디선가 살고 있는 그리스도인이 <br>당신에게 전해 줄 것입니다. </h1>
        </div>
      </section>
      <section class="fullpage-slide jesus white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">예수님을요</h1>
        </div>
      </section>
      <section class="fullpage-slide white-tone base">
        <img class="fullpage-slide-back-img old-back-img" data-src="/img/old.jpg" alt="">
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

    <SideContent :contents="sideContent"></SideContent>

  </div>
</template>

<script>
import SideContent from '~/components/SideContent.vue';
import ModalButton from '~/components/ModalButton.vue';
import ResourceLoader from '~/assets/js/ResourceLoader.js';
import util from '~/assets/js/util.js';

export default {
  components: {
    SideContent,
    ModalButton
  },
  watch: {
    '$store.state.index': async function() {
      util.updateLayout(this);
    }
  },
  data() {
    return {
      sideContent: [],
      whyGodContent: [
        {
          id: '1',
          tag: 'h1',
          className: 'title',
          content: `하나님의 사랑`
        },
        {
          id: '2',
          tag: 'p',
          className: 'desc',
          content: `하나님은 우리를 사랑하셔서 이 모든 일을 하셨습니다.`
        },
        {
          id: '3',
          tag: 'p',
          className: 'desc carry-on',
          content: `우리를 심판하시기 위함이 아닌 구원하여 영생을 주시기 위함이죠.`
        },
        {
          id: '4',
          tag: 'p',
          className: 'scripture',
          content: `우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 확증하셨느니라`
        },
        {
          id: '5',
          tag: 'span',
          className: 'verse',
          content: `로마서 5장 8절`
        },
        {
          id: '6',
          tag: 'p',
          className: 'desc',
          content: `이는 모든 것이 하나님의 선물입니다.`
        },
        {
          id: '7',
          tag: 'p',
          className: 'scripture',
          content: `너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니 이것은 너희에게서 난 것이 아니요 하나님의 선물이라`
        },
        {
          id: '8',
          tag: 'span',
          className: 'verse',
          content: `에베소서 2장 8절`
        },
      ],
      whyGodBtnContent: '하나님은 왜 그러셨을까요?'
    }
  },
  methods: {
    openWhyGodContainer() {
      this.sideContent = this.whyGodContent;
      this.$store.commit('setModal', true);
    }
  },
  mounted() {
    ResourceLoader.load( async () => {
      util.initLayout(this);
      util.initPagePosition(this);
      util.updateLayout(this);
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
      transform: translate(0, 40%);
    }

    .heading {
      top: 69%;
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
