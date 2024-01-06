import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { LoginApi } from "../api/Login";
import { BrandApi } from "../api/Brand";
import { ProductApi } from "../api/Product";
import { CategoryApi } from "../api/Category";

export const store = configureStore({
    reducer: {
        [LoginApi.reducerPath]: LoginApi.reducer,
        [BrandApi.reducerPath]: BrandApi.reducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
        [CategoryApi.reducerPath]: CategoryApi.reducer,
        
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware()
            .concat(LoginApi.middleware)
            .concat(BrandApi.middleware)
            .concat(ProductApi.middleware)
            .concat(CategoryApi.middleware)
            
})
setupListeners(store.dispatch);