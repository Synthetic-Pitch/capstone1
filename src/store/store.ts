import { configureStore } from '@reduxjs/toolkit';
import userInputSlice from './slices/user-input-slice';

export const store = configureStore({
    reducer: {
        userInput : userInputSlice,
    },
});

// TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;