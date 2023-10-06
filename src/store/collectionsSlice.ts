import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getRequest from '../utils/fetchRequest'


export interface IData {
    data: Object
    loading: boolean,
    message: string,
    error: string
}

const initialState: IData = {
    data: {},
    loading: true,
    message: '',
    error: ''
};

export const getTopCollections = createAsyncThunk(
    'collections/getTopCollections',
    async () => {
        return getRequest('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=10')
    }
);

export const collectionsSlice = createSlice({
    name: "collections",
    initialState: initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getTopCollections.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getTopCollections.fulfilled, (state, action) => {
            // @ts-ignore
            state.data = action.payload
            state.message = 'Data fetched successfully'
            state.loading = false
        })
        builder.addCase(getTopCollections.rejected, (state, action) => {
            state.error = 'an error occured'
            state.loading = false
        })
    }
});


export const { resetState } = collectionsSlice.actions;
export default collectionsSlice.reducer;