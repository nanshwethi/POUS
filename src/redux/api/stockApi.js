import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const stockApi = createApi({
    reducerPath : 'stockApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://h.mmsdev.site/api/v1'}),
    tagTypes : ['stock'],
    endpoints : builder =>({
        getSingleStock : builder.query({
            query : ({token,id})=>({
                url : `/stock/${id}`,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['stock']
        }),
        getUnitStock : builder.query({
            query : ({token,p})=>({
                url : `/stock?page=${p}`,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['stock']
        }),
        updateStock : builder.mutation({
            query : ({token,content})=>({
                url : `/stock`,
                method : 'POST',
                body : content,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['stock']
        }),
        
        deleteStock :builder.mutation({
            query : ({id,token})=>({
                url : `/stock/${id}`,
                body : id,
                method : 'DELETE',
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['stock']

        })
    })

})

export const {useUpdateStockMutation,useGetUnitStockQuery,useGetSingleStockQuery,useDeleteStockMutation} = stockApi