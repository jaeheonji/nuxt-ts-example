import { storiesOf } from '@storybook/vue'

import SampleButton from './Sample.vue'

storiesOf('Sample', module).add('default button', () => ({
  components: { SampleButton },
  template: '<div class="p-5"><sample-button>default button</sample-button></div>',
}))
