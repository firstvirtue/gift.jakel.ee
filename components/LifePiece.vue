<template>
  <div class='life-piece-wrap'>
    <canvas id='piece-canvas' class="piece-canvas"></canvas>
  </div>
</template>

<script>
import LifePiece from '~/assets/js/life-piece.js';
import util from '~/assets/js/util.js';

export default {
  created() {
    let cnvs = document.getElementById('piece-canvas');
    this.lifePiece = new LifePiece(cnvs);
  },
  beforeDestroy() {
    if(this.lifePiece) this.lifePiece.unload();
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
      this.lifePiece.slide();
      // ball.setState('');
    },
    unslidePanel() {
      let canvas = document.getElementById('piece-canvas');

      canvas.style.transform = ``;
      this.lifePiece.unslide();
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

}
</style>
