import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://h.mmsdev.site/api/v1`,
  }),
  tagTypes: ["product"],

  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: ({product,token}) => ({
        url: `/product`,
        method: "POST",
        headers: { authorization: `Bearer ${token}` },

        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    
  }),
});

export const { useAddProductMutation} =productApi;
