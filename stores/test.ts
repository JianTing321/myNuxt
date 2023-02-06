// import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools

interface test {
  set:string,
  testSet:number
}

export const useTestStore = defineStore('test', {
  // a function that returns a fresh state
  state: ():test => ({
    set: '測試的倉庫',
    testSet: 222
  }),
  getters: {
    doubleCount: state => state.testSet * 2
  }

})
