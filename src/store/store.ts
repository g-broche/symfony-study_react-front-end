import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productsSlice'
import cartReducer from './features/cartSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// ...

export const store = configureStore({
    reducer: {
        productsReducer,
        cartReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;