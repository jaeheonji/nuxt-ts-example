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
  @apply px-4 py-2;
  @apply bg-blue text-white;

  transition: all 0.2s ease-in-out;

  &:hover {
    @apply bg-blue-dark;
  }
}
</style>
