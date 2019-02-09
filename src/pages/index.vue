<template>
  <div>
    <sample-button>Hello Nuxt</sample-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import SampleButton from '~/components/Sample/Sample.vue'

@Component({
  components: {
    SampleButton,
  },
})
export default class Index extends Vue {}
</script>

<style>
</style>
