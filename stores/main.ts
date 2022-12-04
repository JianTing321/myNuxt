// import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools
// import { useTestStore } from './test'
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: 'Eduardo',
    car: 'BMW'
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCounter: state => state.counter * 2,
    // use getters in other getters
    doubleCounterPlusOne (): number {
      return this.doubleCounter + 1
    },

    // 取得useTestStore的store
    otherGetter (state) {
      const otherStore = useTestStore()
      return state.car + otherStore.set
    }
  },
  // optional actions
  actions: {
    reset () {
      // `this` is the store instance
      this.counter = 0
    },
    getList () {
      // console.log("object");
      // console.log(useTestStore().testSet);
      console.log('object')
    }
  }
})
