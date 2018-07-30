<template>
  <div class="wrap">
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
</template>

<script>
export default {
  mounted() {

    let items = document.querySelectorAll('.important-item');

    // items.forEach((e, i)=>{
      let tl = new TimelineMax();
      tl.from('.important-item', 0.2, {scale:1});
    // });
  }
}
</script>

<style lang="scss">
  .important {
    &-item {
      position: absolute;
      background: $brand;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      transform: scale(0);

      &.money {
        top: 30px;
        left: 30px;
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
        top: 330px;
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
        left: 170px;
        width: 60px;
        height: 60px;
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
</style>
