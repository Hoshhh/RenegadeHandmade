import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type InitialState = {
    numberOfItems: number
}

const initialState: InitialState = {
    numberOfItems: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateBadge: (state, action) => {
            state.numberOfItems = action.payload
        }
    }
})

export default cartSlice.reducer
export const { updateBadge } = cartSlice.actions