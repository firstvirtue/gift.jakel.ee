<template lang="html">
  <aside class="side-content" :class="asideState">

    <div class="dimmed"></div>
    <div class="container">
      <component v-for="item in contents" :is="item.tag" :key="item.id">
        {{item.content}}
      </component>
      <button type="button" class="close-btn" @click="closeContainer">닫기</button>
    </div>
    <button type="button" class="open-btn" @click="openContainer">열기</button>

  </aside>
</template>

<script>
export default {
  props: {
    contents: Array
  },
  data() {
    return {
      asideState: 'close',
    }
  },
  methods: {
    openContainer() {
      this.asideState = 'open';
      this.$store.commit('setModal', true);
    },
    closeContainer() {
      this.asideState = 'close';
      this.$store.commit('setModal', false);
    }
  }

}
</script>

<style lang="scss" src="~/assets/css/components/side-content.scss"></style>
