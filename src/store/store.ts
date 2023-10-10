import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './sidebarSlice'
import collectionsReducer from './collectionsSlice'
import categoriesReducer from './categoriesSlice'

const makeStore = () => configureStore({
    reducer: {
        sidebar: sidebarReducer,
        collections: collectionsReducer,
        categories: categoriesReducer
    }
})

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;