import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => (
    { name: 'Nuxt3-Clean-Architecture-Base' }
  ),
  getters: {
    getName: (state) => state.name,
  },
})