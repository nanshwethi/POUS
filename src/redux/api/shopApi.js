import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath : 'shopApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://h.mmsdev.site/api/v1'}),
    tagTypes : ['shop'],
    endpoints : builder =>({
        getProducts : builder.query({
            query :(token)=>({
                url : '/product',
                headers : {authorization : `Bearer ${token}`}
            })
        }),
        voucher : builder.mutation({
            query : ({token,stData})=>({
                url : '/voucher',
                method : 'POST',
                body : stData,
                headers : {authorization : `Bearer ${token}`,"Content-type": "application/json; charset=UTF-8",}
            }),
            providesTags : ['shop']
        })
    })
})

export const {useGetProductsQuery,useVoucherMutation} = shopApi