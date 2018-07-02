<template lang="html">
  <div class="sidenav">
    <div class="dimmed" @click="clickDimmed()"></div>
    <div class="menu-container">
      <ol class="menu-list">
        <li class="menu-item">
          <a href="/ko/who-is">
            <span class="menu-icon">1</span>
            <div class="menu-name">
              who is?
            </div>
          </a>
        </li>
        <li class="menu-item">
          <a href="/ko/what-is">
            <span class="menu-icon">2</span>
            <div class="menu-name">
              what is?
            </div>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    '$store.state.isOpenedSideNav': function() {

      let self = this;
      // open
      if(this.$store.state.isOpenedSideNav) {
        TweenMax.to(self.sideNav, 0.5, {
          display: 'block'
        });

        TweenMax.to(self.dimmed, 0.5, {
          opacity: 0.6,
        });

        TweenMax.to(self.menuContainer, 0.4, {
          x: '25%',
        });
      } else {
        TweenMax.to(self.sideNav, 0.5, {
          display: 'none'
        });

        TweenMax.to(self.dimmed, 0.5, {
          opacity: 0,
        });

        TweenMax.to(self.menuContainer, 0.4, {
          x: '100%',
        });
      }

      // FIXME: 애니메이션 상태 정리
      // TODO: timeline을 이용한 메뉴 슬라이드

    }
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
    });

  },
}
</script>

<style lang="scss" scoped>
  .sidenav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    .dimmed {
      position: absolute;
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
    }
  }
</style>
