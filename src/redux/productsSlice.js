import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from '../lib/commerce'

export const getProductsAsync = createAsyncThunk(
    'products/getProductsAsync', 
    async () => {
        const data = await commerce.products.list()
        if (data.ok) {
            const products = await data.json()
            return { products }
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    extraReducers: {
        [getProductsAsync.fulfilled]: (state, action) => {
            return action.payload.products
        }
    }
})

export default productsSlice.reducer