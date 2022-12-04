// import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useTestStore = defineStore('test', {
  // a function that returns a fresh state
  state: () => ({
    set: '測試的倉庫',
    testSet: 222
  }),
  getters: {
    doubleCount: state => state.testSet * 2
  }

})
