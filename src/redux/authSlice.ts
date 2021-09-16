import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuth: boolean
}
const initialState: AuthState = {
  isAuth: false
}
export const authSlice = createSlice({
  name: 'auth',
  initialState: {...initialState},
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    logout: (state) => {
      state.isAuth = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer