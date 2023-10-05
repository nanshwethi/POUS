import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath : 'profileApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://h.mmsdev.site/api/v1'}),
    tagTypes : ['profile'],
    endpoints : builder =>({
        updateProfile : builder.mutation({
            query : ({token,content,id})=>({
                url : `/user/${id}`,
                method : 'PUT',
                body : content,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['profileApi']
        }),
        changePasssword : builder.mutation({
            query : ({token,password})=>({
                url : `/change-password`,
                method : 'POST',
                body : password,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['profileApi']
        }),
        getSingleUser : builder.query({
            query : ({token,id})=>({
                url : `/user/${id}`,
                headers : {authorization : `Bearer ${token}`}
            }),
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },

        })
    })
})

export const {useUpdateProfileMutation,useGetSingleUserQuery,useChangePassswordMutation} = profileApi