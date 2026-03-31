import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@supabase/supabase-js'

interface AuthState {
  user: User | null
  isLoading: boolean
}

const initialState: AuthState = {
  user: null,
  isLoading: true  // true at start so we wait for session check
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLoading = false
    },
    clearUser: (state) => {
      state.user = null
      state.isLoading = false
    },
  },
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer