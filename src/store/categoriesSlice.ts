import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getRequest from '../utils/fetchRequest'


export interface ICollections {
    item: Object,
    loading: boolean
}

export interface INfts {
    item: Object,
    loading: boolean
}

export interface IDataObject {
    collections: ICollections,
    nfts: INfts
}

export interface IData {
    data: IDataObject,
    message: string,
    error: string
}

const initialState: IData = {
    data: {
        collections: {
            item: {},
            loading: true
        },
        nfts: {
            item: {},
            loading: true
        }
    },
    message: '',
    error: ''
};


export const getCollections = createAsyncThunk(
    'categories/getCollections',
    async () => {
        return getRequest('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=100')
    }
)

export const getNFTs = createAsyncThunk(
    'categories/getNFTs',
    async (contractAddress) => {
        return getRequest(`https://api.blockspan.com/v1/nfts/contract/${contractAddress}?chain=eth-main&page_size=10`)
    }
)


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        resetState: () => { }
    },
    extraReducers: (builder) => {
        // getCollections
        builder.addCase(getCollections.pending, (state) => {
            state.data.collections.loading = true
        })
        builder.addCase(getCollections.fulfilled, (state, action) => {
            // @ts-ignore
            state.data.collections.item = action.payload
            state.message = 'Data fetched successfully'
            state.data.collections.loading = false
        })
        builder.addCase(getCollections.rejected, (state) => {
            state.error = 'an error occured'
            state.data.collections.loading = false
        })

        // getNFTs
        builder.addCase(getNFTs.pending, (state) => {
            state.data.nfts.loading = true
        })
        builder.addCase(getNFTs.fulfilled, (state, action) => {
            // @ts-ignore
            state.data.nfts.item = action.payload
            state.message = 'Data fetched successfully'
            state.data.nfts.loading = false
        })
        builder.addCase(getNFTs.rejected, (state) => {
            state.error = 'an error occured'
            state.data.nfts.loading = false
        })

    }
});


export const { resetState } = categoriesSlice.actions;
export default categoriesSlice.reducer;