<template>
  <div class="modal-btn-container">
    <p class="modal-btn-desc">{{content}}</p>
    <button class="modal-btn" type="button" name="button" @click="openSideContent"><span class="a11y">열기</span></button>
  </div>
</template>

<script>
export default {
  props: {
    content: String
  },
  methods: {
    openSideContent() {
      this.$emit('event', {});
    }
  }
}
</script>

<style lang="scss">
  .modal-btn {
    & {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 40px;
      height: 40px;
      background: $black;
      border: none;
      border-radius: 50%;

      &::before {
        content: '+';
        // display: inline-block;
        // position: relative;
        left: 50%;
        // transform: translateX(-50%);
        font-size: 32px;
        color: $white;
      }
    }

    &-container {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: $white;

      &.black {
        color: $black;
      }
    }

    &-desc {
      margin-bottom: 0.7em;
      color: inherit;
    }
  }
</style>
