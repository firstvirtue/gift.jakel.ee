<template>
  <div class='life-piece-wrap'>
    <canvas id='piece-canvas' class="piece-canvas"></canvas>
  </div>
</template>

<script>
import LifePiece from '~/assets/js/life-piece.js';
import util from '~/assets/js/util.js';

export default {
  mounted() {
    this.lifePiece = new LifePiece();
  },
  beforeDestroy() {
    this.lifePiece.unload();
  },
  methods: {
    async openPanel() {
      let canvas = document.getElementById('piece-canvas');
      canvas.style.display = `block`;

      let wrap = document.querySelector('.life-piece-wrap');
      wrap.style.opacity = 1;

      await util.wait(3000);
      this.lifePiece.addBallsSequence();
    },
    closePanel() {

      let wrap = document.querySelector('.life-piece-wrap');
      wrap.style.opacity = 0;
    },
    breakPanel() {
      // [TODO] 상태 변화
    },
    slidePanel() {
      let canvas = document.getElementById('piece-canvas');

      canvas.style.transform = `translateY(-50%)`;
      this.lifePiece.setLife();
      // ball.setState('');
    },
    unslidePanel() {
      let canvas = document.getElementById('piece-canvas');

      canvas.style.transform = ``;
      this.lifePiece.init();
      // ball.setState('');
    },
  }
}
</script>

<style lang='scss'>
.life-piece-wrap {

  // display: none;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;

  #piece-canvas {
    border-bottom: 1px solid #de5458;
    transition: all 0.5s;
  }

  .slide {
    position: relative;
    top: 30%;
  }

  .important {
  //   &-item {
  //     position: absolute;
  //     background: $brand;
  //     border-radius: 50%;
  //     width: 100px;
  //     height: 100px;
  //     transform: scale(0);
  //     opacity: 0;
  //
  //     &.money {
  //       top: 48px;
  //       left: 64px;
  //       width: 90px;
  //       height: 90px;
  //     }
  //
  //     &.honor {
  //       top: 330px;
  //       left: 170px;
  //       width: 90px;
  //       height: 90px;
  //     }
  //
  //     &.acknowledge {
  //       top: 299px;
  //       left: 20px;
  //       width: 110px;
  //       height: 110px;
  //     }
  //
  //     &.sex {
  //       top: 230px;
  //       left: 120px;
  //       width: 80px;
  //       height: 80px;
  //     }
  //
  //     &.realization {
  //       top: 77px;
  //       left: 230px;
  //       width: 80px;
  //       height: 80px;
  //     }
  //
  //     &.happiness {
  //       top: 190px;
  //       left: 60px;
  //       width: 50px;
  //       height: 50px;
  //     }
  //
  //     &.pleasure {
  //       top: 172px;
  //       left: 195px;
  //       width: 65px;
  //       height: 65px;
  //     }
  //   }

    &-title {
      display: inline-block;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      text-align: center;
      color: $white;
    }
  }
}
</style>
