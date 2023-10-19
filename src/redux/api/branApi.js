import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const branApi = createApi({
  reducerPath: "branApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://h.mmsdev.site/api/v1",
  }),
  tagTypes: ["bran"],
  endpoints: (builder) => ({
    getBrand: builder.query({
      query: ({ token, p }) => ({
        url: `/brand?page=${p}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getSingleBrand: builder.query({
      query: ({ token, id }) => ({
        url: `/brand/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    createBrand: builder.mutation({
      query: ({ token, content }) => ({
        url: "/brand",
        body: content,
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],
    }),
    deleteBrand: builder.mutation({
      query: ({ token, id }) => ({
        url: `/brand/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],
    }),
    updateBrand: builder.mutation({
      query: ({ token, id, content }) => ({
        url: `/brand/${id}`,
        method: "PUT",
        body: content,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["brand"],
    }),
  }),
});

export const {
  useGetBrandQuery,
  useGetSingleBrandQuery,
  useCreateBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} = branApi;
