import { Ref } from 'nuxt/dist/app/compat/capi'

// 所有倉庫的型別建構，先定義State的型別(他不是一個真正的倉庫，但是每個倉庫都會用的這個倉庫)
export type MakeInitStateFn<State> = (
    options?: Partial<State>
) => State;

// 定義NewState可能為一物件或是函式
type NewState<State> = Partial<State> | ((state: State) => Partial<State>);

const useCommonStore = <State> (
  makeInitStateFn: MakeInitStateFn<State>,
  initParams?: Partial<State>
) => {
  // 函式的方式彈性生成初始state
  const initState = makeInitStateFn(initParams)
  const state = ref(initState) as Ref<State>

  // setState函式
  const setState = (newState: NewState<State>) => {
    const _newState =
            typeof newState === 'function' ? newState(state.value) : newState
    state.value = {
      ...state.value,
      ..._newState
    }
  }

  const resetState = (partialRenewState?: Partial<State>) => {
    setState(makeInitStateFn(partialRenewState))
  }

  return {
    state,
    setState,
    resetState
  }
}

export default useCommonStore
