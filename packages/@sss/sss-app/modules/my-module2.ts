// https://github.com/nuxt/starter/tree/module
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module2',
    configKey: 'myModule2',
  },
  defaults: {
    test: 123,
  },
  setup(options, nuxt) {
    nuxt.hook('modules:done', () => {
      console.log('My module is ready with current test option: ', options.test)
    })
  },
})
