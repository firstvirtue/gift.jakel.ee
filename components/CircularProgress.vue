<template lang="html">
  <svg :height="radius * 2" :width="radius * 2">
    <circle :r="normalizedRadius" :cx="radius" :cy="radius" stroke="#fff" :stroke-width="stroke" fill="transparent"
            :stroke-dasharray="strokeDasharray" strokeDashoffset="0" :style="{ strokeDashoffset: strokeDashoffset }"/>
  </svg>
</template>

<script>
export default {
  props: {
    radius: Number,
    stroke: Number,
    progress: Number
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;

    return {
      normalizedRadius,
      circumference,
      strokeDasharray,
    }
  },
  computed: {
    strokeDashoffset() {
      return this.progress === Infinity ? this.circumference : this.circumference - (this.circumference * (this.progress / 100));
    }
  }
}
</script>

<style lang="css">
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
