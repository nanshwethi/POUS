import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const stockApi = createApi({
    reducerPath : 'stockApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://h.mmsdev.site/api/v1'}),
    tagTypes : ['stock'],
    endpoints : builder =>({

        getSingleStock : builder.query({
            query : ({token,i})=>({
                url : `/stock/${i}`,
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
        createStock : builder.mutation({
            query : ({token,content})=>({
                url : '/stock',
                method : 'POST',
                body : content,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['stock']
        }),
        updateStock : builder.mutation({
            query({id,content,token}){
                console.log(id,content,token)
                const bd = JSON.stringify(content)
                return{
                    url : `/stock/${id}`,
                    method : 'PUT',
                    body : content,
                    prepareHeaders: (headers) => {
                        // headers.set("Content-Type", "multipart/form-data")
                        // headers.set("content-type", "application/x-www-form-urlencoded")
                        headers.set('Authorization' , `Bearer ${token}`)
                        headers.set('Accept', 'application/json');
                        return headers
                    },

                }
            },
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

export const {useCreateStockMutation,useGetUnitStockQuery,useGetSingleStockQuery,useUpdateStockMutation,useDeleteStockMutation} = stockApi