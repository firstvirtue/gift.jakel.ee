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
        <button class="aside-btn" type="button" name="button" @click="openContainer">죽음이란?</button>
      </section>

      <section class="fullpage-slide genetic base">
        <img class="fullpage-slide-back-img genetic-back-img" data-src="/img/prairie.jpg" alt="">
        <div class="l-wrap">
          <h1 class="h1 heading">그 죄는 그의 자손 모두에게 유전되었습니다.</h1>
          <p class="paragraph">그리고 그 죄는 여기 있는 우리에게도 영향을 미칩니다. <br> 우리안에는.. 죄가 있습니다.</p>
        </div>
      </section>

      <section class="fullpage-slide empty-state base">
        <img class="fullpage-slide-back-img empty-state-back-img" data-src="/img/empty.jpg" alt="">
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
          <h1 class="h1 heading">이에 하나님은 한 가지 방법을 사용했습니다.</h1>
        </div>
      </section>
    </div>

    <SideContent :contents="anxietyContents"></SideContent>

  </div>
</template>

<script>
import SideContent from '~/components/SideContent.vue';
import util from '~/assets/js/util.js';
import ResourceLoader from '~/assets/js/ResourceLoader.js';

export default {
  components: {
    SideContent
  },
  data() {
    return {
      anxietyContents: [
        {
          id: '1',
          tag: 'h1',
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
      ],
    }
  },
  watch: {
    '$store.state.index': async function() {

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
      this.$store.commit('setModal', true);
    },
  },
  mounted() {

    ResourceLoader.load( () => {
      // load complete!
      this.$store.commit('setLoading', false);

      this.$store.commit('setTitle', '우리의 상태');
      this.$store.commit('setPage', 2);

      // TODO: 뒤에서 왔을 때
      this.$store.commit('setIndex', 0);

      util.initLayout(this);
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
