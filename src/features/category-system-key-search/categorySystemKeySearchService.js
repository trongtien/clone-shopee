import { createApi } from '@reduxjs/toolkit/query/react'
import RTKCreateApiBase from '../../utils/libs/storeRTK'

export const categorySystemServiceApi = createApi({
    ...RTKCreateApiBase,
    tagTypes: ['CategorySystemKeySearch'],
    endpoints: (builder) => ({
        getCategorySystemKeySeach: builder.query({
            query: () => {
                return {
                    url: '/category-system/key-search',
                    headers: {
                        "x-api-key-system": "system"
                    }
                }
            },
            transformResponse: res => {
                return res
            },
            providesTags: ['CategorySystemKeySearch']
        })
    })
})

export const {
    useGetCategorySystemKeySeachQuery,
} = categorySystemServiceApi


