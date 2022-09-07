import RTKCreateApiBase from "~/utils/libs/storeRTK"

const categorySystemServiceApiWithTag =  RTKCreateApiBase.enhanceEndpoints({
    addTagTypes: ['CategorySystem']
})

export const categorySystemServiceApi = categorySystemServiceApiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getCategorySystemKeySeach: builder.query({
            query: () => {
                return {
                    url: '/category-system/key-search',
                    headers: {
                        "x-api-key-system": "system"
                    },
                    validateStatus: (response, result) => response.status === 200 && !result.isError
                }
            },
            transformResponse: res => {
                return res
            },
            providesTags: ['CategorySystem']
        }),
        getCategory:builder.query({
            query: () => {
                return {
                    url: '/category-system',
                    headers: {
                        "x-api-key-system": "system"
                    },
                    validateStatus: (response, result) => response.status === 200 && !result.isError
                }
            },
            transformResponse: res => {
                return res
            },
            providesTags: ['CategorySystem']
        })
    })
})

export const {
    useGetCategorySystemKeySeachQuery,
    useGetCategoryQuery
} = categorySystemServiceApi


