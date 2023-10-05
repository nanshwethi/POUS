import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://h.mmsdev.site/api/v1`,
  }),
  tagTypes: ["product"],

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: ({token,p}) => ({
        url: `/product?page=${p}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),

    getSingleProduct: builder.query({
      query: ({token,id}) => ({
        url: `/product/${id}`,
        headers: { authorization: `Bearer ${token}`},
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },

    }),

    addProduct: builder.mutation({
      query: ({ product, token }) => ({
        url: `/product`,
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        body: product,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct : builder.mutation({
      query: ({ token,id }) => ({
        url: `/product/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct : builder.mutation({
      query({content,token,id}){
        // console.log(content,token,id)
        return {
          url : `/product/${id}`,
          method : 'PUT',
          headers: { authorization: `Bearer ${token}` },
          body : content
        }
        
      },
      invalidatesTags : ['shop']
    })

  }),
});

export const { useAddProductMutation, useGetProductsQuery,useGetSingleProductQuery ,useUpdateProductMutation,useDeleteProductMutation} = productApi;
