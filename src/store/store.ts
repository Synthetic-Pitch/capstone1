import { configureStore } from '@reduxjs/toolkit'
import userInputSlice from './slices/user-input-slice'
import animationSlice from './slices/animation-slice'
import authSlice from './slices/auth-slice'  // ← add this

export const store = configureStore({
  reducer: {
    userInput: userInputSlice,
    animation: animationSlice,
    auth: authSlice,  // ← add this
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch