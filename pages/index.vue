<template>
  <section class="container">

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  methods: {

  },
  mounted() {
    // window.addEventListener('scroll', function(){
    //   console.log(window.scrollY);
    // });

    this.$router.push('/ko/precious-piece');

  }
}
</script>

<style lang="scss" src="~/assets/css/common.scss"></style>
