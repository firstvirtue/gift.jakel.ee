<template lang="html">
  <aside class="side-content">
    <div class="dimmed"></div>
    <div class="container">
      <component v-for="item in contents" :is="item.tag" :key="item.id">
        {{item.content}}
      </component>
    </div>
    <button type="button">닫기</button>
  </aside>
</template>

<script>
export default {
  props: {
    contents: Array
  }
}
</script>

<style lang="scss" src="~/assets/css/components/side-content.scss"></style>
