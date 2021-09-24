import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth']
}
import authSlice from './authSlice';
import counterSlice from './counterSlice'
import deviceTypeSlice from './deviceTypeSlice';
import todoSlice from './todoSlice';

const persistedReducer = persistReducer(persistConfig, combineReducers({
  counter: counterSlice,
  todo: todoSlice,
  auth: authSlice,
  deviceType: deviceTypeSlice
}))

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store;