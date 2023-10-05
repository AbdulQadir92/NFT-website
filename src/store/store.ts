import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice';


const makeStore = () => configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
})

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;