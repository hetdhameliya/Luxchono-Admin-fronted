import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { LoginApi } from "../api/Login";
import { BrandApi } from "../api/Brand";
import { ProductApi } from "../api/Product";
import { CategoryApi } from "../api/Category";
import { OrdersApi } from "../api/Orders";

export const store = configureStore({
    reducer: {
        [LoginApi.reducerPath]: LoginApi.reducer,
        [BrandApi.reducerPath]: BrandApi.reducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
        [CategoryApi.reducerPath]: CategoryApi.reducer,
        [OrdersApi.reducerPath]: OrdersApi.reducer,
        
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware()
            .concat(LoginApi.middleware)
            .concat(BrandApi.middleware)
            .concat(ProductApi.middleware)
            .concat(CategoryApi.middleware)
            .concat(OrdersApi.middleware)
            
})
setupListeners(store.dispatch);