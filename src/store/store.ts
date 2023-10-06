import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'
import collectionsReducer from './collectionsSlice'


const makeStore = () => configureStore({
    reducer: {
        sidebar: sidebarReducer,
        collections: collectionsReducer
    }
})

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;