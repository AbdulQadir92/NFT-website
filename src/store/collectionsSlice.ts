import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getRequest from '../utils/fetchRequest'


export interface ITopCollections {
    item: Object,
    loading: boolean
}

export interface ITrendingCollections {
    item: Object,
    loading: boolean
}

export interface ICollection {
    item: Object,
    loading: boolean
}

export interface IDataObject {
    topCollections: ITopCollections,
    trendingCollections: ITrendingCollections,
    collection: ICollection
}

export interface IData {
    data: IDataObject,
    message: string,
    error: string
}

const initialState: IData = {
    data: {
        topCollections: {
            item: {},
            loading: true
        },
        trendingCollections: {
            item: {},
            loading: true
        },
        collection: {
            item: {},
            loading: true
        }
    },
    message: '',
    error: ''
};

export const getTopCollections = createAsyncThunk(
    'collections/getTopCollections',
    async () => {
        return getRequest('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=10')
    }
);

export const getTrendingCollections = createAsyncThunk(
    'collections/getTrendingCollections',
    async () => {
        return getRequest('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=8')
    }
);

export const getCollection = createAsyncThunk(
    'collections/getCollection',
    async () => {
        return getRequest('https://api.blockspan.com/v1/exchanges/collections/key/bi-did-ethereum?chain=eth-main&exchange=opensea')
    }
);

export const collectionsSlice = createSlice({
    name: "collections",
    initialState: initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        // getTopCollections
        builder.addCase(getTopCollections.pending, (state) => {
            state.data.topCollections.loading = true
        })
        builder.addCase(getTopCollections.fulfilled, (state, action) => {
            // @ts-ignore
            state.data.topCollections.item = action.payload
            state.message = 'Data fetched successfully'
            state.data.topCollections.loading = false
        })
        builder.addCase(getTopCollections.rejected, (state) => {
            state.error = 'an error occured'
            state.data.topCollections.loading = false
        })

        // getTrendingCollections
        builder.addCase(getTrendingCollections.pending, (state) => {
            state.data.trendingCollections.loading = true
        })
        builder.addCase(getTrendingCollections.fulfilled, (state, action) => {
            // @ts-ignore
            state.data.trendingCollections.item = action.payload
            state.message = 'Data fetched successfully'
            state.data.trendingCollections.loading = false
        })
        builder.addCase(getTrendingCollections.rejected, (state) => {
            state.error = 'an error occured'
            state.data.trendingCollections.loading = false
        })

        // getCollection
        builder.addCase(getCollection.pending, (state) => {
            state.data.collection.loading = true
        })
        builder.addCase(getCollection.fulfilled, (state, action) => {
            // @ts-ignore
            state.data.collection.item = action.payload
            state.message = 'Data fetched successfully'
            state.data.collection.loading = false
        })
        builder.addCase(getCollection.rejected, (state) => {
            state.error = 'an error occured'
            state.data.collection.loading = false
        })
    }
});


export const { resetState } = collectionsSlice.actions;
export default collectionsSlice.reducer;