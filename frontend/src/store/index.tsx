import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './reducers/basket.reducer'

export const store = configureStore({
  reducer: basketReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch