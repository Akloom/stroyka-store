import { ProductInfo } from '@/interfaces/Product'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface StateType {
    list: ProductInfo[]
}

const initialState: StateType = {
    list:  []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductInfo>) => {
            state.list.push(action.payload)
        }
    }
})

export const {addProduct} = basketSlice.actions

export default basketSlice.reducer