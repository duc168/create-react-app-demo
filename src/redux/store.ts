import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import counterSlice from './counterSlice'
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    auth: authSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;