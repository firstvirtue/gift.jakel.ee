<template lang="html">
  <div class="wrap">
    <div class="fullpage-wrapper">
      <section class="fullpage-slide son white-tone base">
        <img class="fullpage-slide-back-img son-back-img" data-src="/img/son.jpg" alt="">
        <!-- TODO: 비누방울이 점점 커지며 퍼지는 모션 -->
        <div class="l-wrap">
          <h1 class="h1 heading">하나님은 본래 교제를 나누기 위해 자기 형상대로 인간을 창조하셨습니다.</h1>
        </div>

      </section>

      <section class="fullpage-slide perfect-state base">
        <img class="fullpage-slide-back-img perfect-state-back-img" data-src="/img/tree-origin.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">영원히 모든 것을 누리는 완벽한 상태였죠.</h1>
        </div>
      </section>

      <section class="fullpage-slide disconnect white-tone base">
        <img class="fullpage-slide-back-img disconnect-back-img" data-src="/img/chain.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">하지만 한 사람의 죄가 하나님과의 관계를 끊었습니다.</h1>
        </div>
      </section>

      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">생명의 근원이신 하나님과의 단절로 영원하던 인간의 삶이 유한해 졌습니다.</h1>
        </div>
      </section>

      <section class="fullpage-slide anxiety base">
        <img class="fullpage-slide-back-img anxiety-back-img" data-src="/img/anxiety.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">죽음이 찾아왔죠.</h1>
          <p class="paragraph">마치 꺾여진 꽃이 며칠 내에 시들듯</p>
        </div>
        <!-- <button class="open-side--btn" type="button" name="button" @click="openContainer">죽음이란?</button> -->
        <ModalButton :content="anxietyBtnContent" @event="openContainer"></ModalButton>
      </section>

      <section class="fullpage-slide genetic base">
        <img class="fullpage-slide-back-img genetic-back-img" data-src="/img/prairie.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">그 죄는 그의 자손 모두에게 영향을 미치게 되었습니다.</h1>
          <p class="paragraph">마치 유전된 것처럼 죄는 우리 모두 안에 있습니다.</p>
        </div>
        <ModalButton :content="sinBtnContent" @event="openSinContainer"></ModalButton>
      </section>

      <section class="fullpage-slide empty-state base">
        <img class="fullpage-slide-back-img empty-state-back-img" data-src="/img/empty.jpg" alt="">
        <div class="dimmed-panel dark"></div>
        <div class="l-wrap">
          <h1 class="h1 heading">공허, 불안.. 하나님과 함께 있을 때는 느껴보지 못했던 감정이 인간을 에워 쌓았습니다.</h1>
        </div>
      </section>

      <!-- TODO: 우리 영혼의 어두운 부분 -> 빛이 비춰짐을 표현하고 싶다 -->

      <!-- <section class="fullpage-slide">
        <h1 class="h1 heading">역사적으로 인간은 구원, 즉 신에 다다르고자 종교를 만들기도 하고</h1>
      </section>

      <section class="fullpage-slide">
        <h1 class="h1 heading">선행과 도덕을 실천하거나, 철학등으로 진리를 연구하기도 했습니다.</h1>
      </section>

      <section class="fullpage-slide">
        <h1 class="h1 heading">그러나 죽음을 막아주진 못했죠 어느것도 구원에 이르게 하지 못했습니다.</h1>
      </section> -->

      <section class="fullpage-slide white-tone hole base">
        <img class="fullpage-slide-back-img hole-back-img" data-src="/img/hole.png" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">우리는 죽어가고 있습니다.</h1>
        </div>
      </section>

      <section class="fullpage-slide white-tone base">
        <div class="l-wrap">
          <h1 class="h1 heading">이에 하나님은 한 가지 방법을 사용하셨습니다.</h1>
        </div>
      </section>
    </div>

    <SideContent :contents="sideContent"></SideContent>

  </div>
</template>

<script>
import SideContent from '~/components/SideContent.vue';
import ModalButton from '~/components/ModalButton.vue';
import util from '~/assets/js/util.js';
import ResourceLoader from '~/assets/js/ResourceLoader.js';

export default {
  components: {
    SideContent,
    ModalButton
  },
  data() {
    return {
      sideContent: [],
      anxietyContents: [
        {
          id: '1',
          tag: 'h1',
          className: 'title',
          content: `죽음이란 무엇인가요?`
        },
        {
          id: '2',
          tag: 'p',
          className: 'scripture',
          content: `그러므로 한 사람으로 말미암아 죄가 세상에 들어오고 죄로 말미암아 사망이 들어왔나니 이와 같이 모든 사람이 죄를 지었으므로 사망이 모든 사람에게 이르렀느니라`
        },
        {
          id: '3',
          tag: 'span',
          className: 'verse',
          content: `로마서 5장 12절`
        },
        {
          id: '4',
          tag: 'p',
          className: 'desc',
          content: `아담과 하와는 뱀에게 속아 하나님께서 금하신 선악과를 범했습니다. 이로 말미암아 죄가 인간에게 들어왔고 그 죄로 인해 사망 즉 죽음이 들어오게 된 것이죠.`
        },
        {
          id: '5',
          tag: 'p',
          className: 'desc',
          content: `이 죽음은 단지 육체의 죽음에 머무르지 않습니다. 죽음 뒤의 죽음 하나님과의 영원한 분리를 포함합니다. 지옥이라고 부르죠..`
        },
      ],
      sinContents: [
        {
          id: '1',
          tag: 'h1',
          className: 'title',
          content: `죄와 죄인이란 무엇인가요?`
        },
        {
          id: '2',
          tag: 'p',
          className: 'desc',
          content: `성경은 모두가 죄인이라고 말합니다. 조금 억울할 수도 있을 말입니다.`
        },
        {
          id: '3',
          tag: 'p',
          className: 'desc carry-on',
          content: `죄를 지어서 죄인이 되었다기 보단 죄인이기 때문에 죄를 짓는 다고 말 할 수 있습니다.`
        },
        {
          id: '4',
          tag: 'p',
          className: 'scripture',
          content: `모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니`
        },
        {
          id: '5',
          tag: 'span',
          className: 'verse',
          content: `로마서 3장 23절`
        },
        {
          id: '6',
          tag: 'p',
          className: 'desc',
          content: `한 번 우리의 지난 날을 되돌아 볼까요? 지금까지 살아오면서 다른 사람들에게 또는 생각으로 지은 죄들을 기억해 봅시다.`
        },
      ],
      newContent: [],
      anxietyBtnContent: '죽음이란?',
      sinBtnContent: '죄와 죄인'
    }
  },
  watch: {
    '$store.state.index': async function() {
      util.updateLayout(this);
      await util.wait(500);

      // FIXME: 어떻게하면 간략하게..
      // this.setCurrent();
    }
  },
  computed: {
    arrangeMotion() {

      return this.$store.state.index;
    }
  },
  methods: {
    // setCurrent() {
    //   let slides = document.querySelectorAll('.fullpage-slide');
    //   let slide = slides[this.$store.state.index];
    //   console.log(slide);
    //   slide.classList.add('is-current');
    // },
    openContainer() {
      this.sideContent = this.anxietyContents;
      this.$store.commit('setModal', true);
    },
    openSinContainer() {
      this.sideContent = this.sinContents;
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
      this.$store.commit('setTitle', '우리의 상태');
      this.$store.commit('setPage', 2);

      // TODO: 뒤에서 왔을 때
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
}

.son {
  &-back-img {
    transform: translate(-16.8%, 7.8%) scale(0.46);
    transform-origin: 0 0;
  }

  .heading {
    top: 3%;
    left: 3%;
    color: $white;
  }
}

.perfect-state {
  &-back-img {
    // transform: translateX(-23%) scale(0.94);
    transform: translateX(-18%) scale(0.86);
    transform-origin: 0 0;
  }

  .heading {
    // top: 82%;
    top: 73%;
  }
}

.disconnect {
  &-back-img {
    transform: translate(-10%, -2%) scale(0.36);
    transform-origin: 0 0;
  }

  .heading {
    // top: 82%;
    top: 77.2%;
  }
}

.anxiety {
  &-back-img {
    transform: translate(-14%, 0) scale(0.56);
    transform-origin: 0 0;
  }

  .heading {
    top: 35%;
  }

  .paragraph {
    top: 35%;
  }
}

.genetic {
  &-back-img {
    transform: translate(-9%, 0) scale(0.66);
    transform-origin: 0 0;
  }

  .heading {
    top: 25%;
  }

  .paragraph {
    top: 25%;
    width: 60%;
  }
}

.empty-state {
  &-back-img {
    transform: translateX(-7%) scale(0.52);
    transform-origin: 0 0;
  }

  .heading {
    top: 51%;
  }
}

.hole {
  &-back-img {
    transform: translate(4%, 17%) scale(0.22);
    transform-origin: 0 0;
  }
}

</style>
