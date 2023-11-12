import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => (
    { name: 'Nuxt-Quasar-Base' }
  ),
  getters: {
    getName: (state) => state.name,
  },
})