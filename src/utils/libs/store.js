import { configureStore } from '@reduxjs/toolkit';
import { categorySystemServiceApi } from '~/features/category-system-key-search/categorySystemKeySearchService';
import categorySystemKeySearchReducer from '~/features/category-system-key-search/categorySystemKeySearchSlice';

export const libaryStored = configureStore({
    reducer:{
        categorySystemKeySearch: categorySystemKeySearchReducer,

        [categorySystemServiceApi.reducerPath]: categorySystemServiceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            categorySystemServiceApi.middleware
        ]),
    devTools: process.env.NODE_ENV === 'development',
})
