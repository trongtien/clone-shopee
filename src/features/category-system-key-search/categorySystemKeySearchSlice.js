import { createSlice } from '@reduxjs/toolkit';
import { categorySystemServiceApi } from './categorySystemKeySearchService';
// import { RTKCreateApiCustom } from '../../utils/libs/RTKCreateApiCustom';

const initialState = {
    keySearch: null,
    categories: null
}

export const categorySystemKeySearchSlice = createSlice({
    name: 'category-system-key-search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(categorySystemServiceApi.endpoints.getCategorySystemKeySeach.matchFulfilled, (state, action) => {
            console.log("action", action)
            state.keySearch = action.payload
        })
    }
})


const categorySystemKeySearchReducer = categorySystemKeySearchSlice.reducer;
export default categorySystemKeySearchReducer;