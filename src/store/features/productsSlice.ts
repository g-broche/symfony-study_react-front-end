import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";
import { AppProduct } from "../../interfaces/model";
// import { Products } from "../../classes/Products";

export const productsSlice = createSlice({
    name: 'productStore',
    initialState: {
        productList: [] as AppProduct[]
    },
    reducers: {
        storeProducts: (state, action: PayloadAction<AppProduct[]>) => {
            state.productList = []
            action.payload.forEach(product => {
                state.productList.push(product)
            });
        },
        clearProductStore: (state) => {
            state.productList = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { storeProducts, clearProductStore } = productsSlice.actions
// export const productsSelector = (state: RootState) => state.productsReducer

export default productsSlice.reducer