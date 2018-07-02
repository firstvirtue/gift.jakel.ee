<!-- TODO: SideContent -->
<template lang="html">
  <aside class="">
    <component :is="comp[0].tag">
      span
    </component>
    <component :is="comp[1].tag">
      div
    </component>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      comp: [
        {tag: 'span'},
        {tag: 'div'}
      ],
    }
  }
}
</script>

<style lang="css">
</style>
