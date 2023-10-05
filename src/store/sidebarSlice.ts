import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { data } from './data/sidebarData';


export interface IMoreItem {
    id: number,
    title: string,
    moreItems: Array<[]>
}

export interface ISidebarData {
    id: number,
    title: string,
    subItems: Array<IMoreItem>
}

export interface IData {
    data: Array<ISidebarData>
    loading: boolean,
    message: string,
    error: string
}

const initialState: IData = {
    data: [],
    loading: true,
    message: '',
    error: ''
}

export const getSidebarData = createAsyncThunk(
    "sidebar/getData",
    async () => {
        return data
    }
);

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getSidebarData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getSidebarData.fulfilled, (state, action) => {
            // @ts-ignore
            state.data = action.payload
            state.message = 'Data fetched successfully'
            state.loading = false
        })
        builder.addCase(getSidebarData.rejected, (state, action) => {
            state.error = action.error.message || 'an error occured'
            state.loading = false
        })
    }
});

export const { resetState } = sidebarSlice.actions;
export default sidebarSlice.reducer;