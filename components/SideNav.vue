<template lang="html">
  <div class="sidenav">
    <div class="dimmed" @click="clickDimmed()"></div>
    <div class="menu-container">
      <ol class="menu-list">
        <li class="menu-item">
          <router-link to="/ko/precious-piece">
            <span class="menu-icon">1.</span>
            <div class="menu-name">
              삶의 소중한 부분들
            </div>
          </router-link>
        </li>
        <li class="menu-item">

          <router-link to="/ko/our-state">
            <span class="menu-icon">2.</span>
            <div class="menu-name">
              우리의 상태
            </div>
          </router-link>

        </li>
        <li class="menu-item">
          <router-link to="/ko/good-news">
            <span class="menu-icon">3.</span>
            <div class="menu-name">
              예수 그리스도의 복음
            </div>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/ko/what-should-do"> <!-- TODO: whole-life -->
            <span class="menu-icon">4.</span>
            <div class="menu-name">
              완전한 삶
            </div>
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import util from '~/assets/js/util.js';

export default {
  watch: {
    '$store.state.isOpenedSideNav': function() {

      let self = this;
      // open
      if(this.$store.state.isOpenedSideNav) {
        TweenMax.to(self.sideNav, 0.5, {
          display: 'block'
        });

        TweenMax.to(self.dimmed, 0.3, {
          opacity: 0.6,
        });

        TweenMax.to(self.menuContainer, 0.3, {
          x: '25%',
          opacity: 1,
        });
      } else {
        TweenMax.to(self.sideNav, 0.5, {
          display: 'none'
        });

        TweenMax.to(self.dimmed, 0.3, {
          opacity: 0,
        });

        TweenMax.to(self.menuContainer, 0.3, {
          x: '100%',
          opacity: 0,
        });
      }

      // FIXME: 애니메이션 상태 정리
      // TODO: timeline delay를 이용한 메뉴 슬라이드
    },
    // $route: async function (to, from) {
    //   await util.wait(500);
    //
    //   this.$store.commit('closeSideNav');
    // },
    '$store.state.isLoading': async function() {
      if( ! this.$store.state.isLoading) {
        this.$store.commit('closeSideNav');
      }
    },
  },
  methods: {
    clickDimmed() {
      this.$store.commit('closeSideNav');
    }
  },
  mounted() {
    let self = this;
    this.sideNav = document.querySelector('.sidenav');
    this.dimmed = document.querySelector('.dimmed');
    this.menuContainer = document.querySelector('.menu-container');

    TweenMax.set(self.sideNav, {
      display: 'none'
    });

    TweenMax.set(self.dimmed, {
      opacity: 0,
    });

    TweenMax.set(self.menuContainer, {
      x: '100%',
      opacity: 0,
    });

  },
}
</script>

<style lang="scss" scoped>
  .sidenav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    .dimmed {
      position: fixed;
      background: #000;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
    }

    .menu {
      &-container {
        position: absolute;
        width: 80%;
        height: 100%;
        background: #fff;
      }

      &-list {
        margin-top: 2em;
        padding-left: 2em;
        padding-right: 2em;
      }

      &-item {
        padding-top: 16px;
        padding-bottom: 16px;
        border-bottom: 1px dotted rgb(183, 183, 183);
        font-size: 28px;

        > a {
          display: inline-block;
          width: 100%;
          text-decoration: none;
        }
      }

      &-icon {
        color: $brand;
        font-family: $en;
        margin-right: 12px;
      }

      &-name {
        display: inline-block;
        color: rgb(153, 153, 153);
        font-size: 18px;
      }
    }
  }
</style>
