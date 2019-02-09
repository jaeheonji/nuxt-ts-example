<template>
  <button class="custom-button">
    <slot/>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Sample extends Vue {}
</script>

<style lang="scss">
.custom-button {
  @apply bg-blue;
}
</style>
