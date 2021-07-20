import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    value: number
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  } as CounterState,
  reducers: {
    incrementAction: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrementAction: state => {
      state.value -= 1
    },
    incrementByAmountAction: (state, action) => {
      state.value += action.payload
    },
    resetCounterAction: (state) => {
        state.value = 0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { incrementAction, decrementAction, incrementByAmountAction, resetCounterAction } = counterSlice.actions

export default counterSlice.reducer