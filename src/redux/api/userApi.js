import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi=createApi({
	reducerPath:"userApi",
	baseQuery:fetchBaseQuery({
		baseUrl:`https://h.mmsdev.site/api/v1`,
		
	}),
	tagTypes:["user"],

	endpoints:(builder)=>({
		getUser:builder.query({
			query:(token)=>({
				url:`/user`,
				method:"GET",
				headers: { authorization: `Bearer ${token}` },
			}),
			providesTags:["user"],
		}),
		addUser: builder.mutation({
			query: ({ content, token }) => ({
			  url: `/user`,
			  method: "POST",
			  headers: { authorization: `Bearer ${token}` },
			  body: content,
			}),
			invalidatesTags: ["user"],
		  }),
	})

})
export const{ useGetUserQuery, useAddUserMutation } =userApi;