<template>
  <div class="life-piece-wrap">
    <div class="slide">
      <div class="important-item money">
        <span class="important-title">돈</span>
      </div>
      <div class="important-item honor">
        <span class="important-title">명예</span>
      </div>
      <div class="important-item acknowledge">
        <span class="important-title">다른 사람에게 인정받음</span>
      </div>
      <div class="important-item sex">
        <span class="important-title">이성</span>
      </div>
      <div class="important-item realization">
        <span class="important-title">자아실현</span>
      </div>
      <div class="important-item happiness">
        <span class="important-title">행복</span>
      </div>
      <div class="important-item pleasure">
        <span class="important-title">쾌락</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // TweenMax.set(".important-item", {scale:1});
  },
  methods: {
    openPanel() {
      TweenMax.to('.life-piece-wrap', 0.5, { autoAlpha:1 });
      this.tween = TweenMax.staggerTo('.important-item', 1, {scale:1, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, -0.2);
    },
    closePanel() {
      // TweenMax.to('.life-piece-wrap', 0.3, { autoAlpha:0, onComplete: () => {
      //   TweenMax.set('.important-item', {clearProps: 'all'});
      // } });
      // FIXME: 초기화 방법!!
      if(this.tween) {
        // this.tween.pause(0, true);
      }
      TweenMax.to('.important-item', 0.3, {opacity: 0, clearProps: 'transform'});
    }
  }
}
</script>

<style lang="scss">
.life-piece-wrap {

  // display: none;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .slide {
    position: relative;
    top: 30%;
  }

  .important {
    &-item {
      position: absolute;
      background: $brand;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      transform: scale(0);
      opacity: 0;

      &.money {
        top: 48px;
        left: 64px;
        width: 90px;
        height: 90px;
      }

      &.honor {
        top: 330px;
        left: 170px;
        width: 90px;
        height: 90px;
      }

      &.acknowledge {
        top: 299px;
        left: 20px;
        width: 110px;
        height: 110px;
      }

      &.sex {
        top: 230px;
        left: 120px;
        width: 80px;
        height: 80px;
      }

      &.realization {
        top: 77px;
        left: 230px;
        width: 80px;
        height: 80px;
      }

      &.happiness {
        top: 190px;
        left: 60px;
        width: 50px;
        height: 50px;
      }

      &.pleasure {
        top: 172px;
        left: 195px;
        width: 65px;
        height: 65px;
      }
    }

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
