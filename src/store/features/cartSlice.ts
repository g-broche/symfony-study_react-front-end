import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";
import { AppProduct } from "../../interfaces/model";
// import { Products } from "../../classes/Products";

export const cartSlice = createSlice({
    name: 'cartStore',
    initialState: {
        content: [] as AppProduct[]
    },
    reducers: {
        addProduct: (state, action: PayloadAction<AppProduct>) => {
            state.content.push(action.payload)
        },
    }
})

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions
// export const cartSelector = (state: RootState) => state.cartReducer

export default cartSlice.reducer