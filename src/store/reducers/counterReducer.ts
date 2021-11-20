import { createSlice } from '@reduxjs/toolkit'

export const Counter = createSlice({
  name: 'Counter',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCounter: (state) => {
      state.count = state.count + 1
    },
    decrementCounter: (state) => {
      state.count = state.count - 1
    },
  },
})

export const { incrementCounter, decrementCounter } = Counter.actions
export default Counter.reducer
