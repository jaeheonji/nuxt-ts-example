import { configure } from '@storybook/vue'

import '../src/assets/css/tailwind.css'

const req = require.context('../src/components', true, /.stor(y|ies).tsx?$/)
const loadStories = () => {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
