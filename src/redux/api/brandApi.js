import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://h.mmsdev.site/api/v1',
  }),
  tagTypes: ["brand"],

  endpoints: (builder) => ({
    getBrands: builder.query({
      query: ({token,p}) => ({
        url: `/brand?page=${p}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],
    }),
    getSingleBrand: builder.query({
      query: ({token,id}) => ({
        url: `/brand/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],
    }),
    createBrand : builder.mutation({
      query : ({token,content})=>({
        url : '/brand',
        body : content,
        method : 'POST',
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],

    }),
    deleteBrand : builder.mutation({
      query : ({token,id})=>({
        url : `/brand/${id}`,
        method : 'DELETE',
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],

    }),
    updateBrand : builder.mutation({
      query : ({token,id,content})=>({
        url : `/brand/${id}`,
        method : 'PUT',
        body : content,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],

    })
  }),
});

export const { useGetBrandsQuery,useCreateBrandMutation,useGetSingleBrandQuery,useDeleteBrandMutation,useUpdateBrandMutation} = brandApi;
