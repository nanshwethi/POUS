import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://h.mmsdev.site/api/v1`,
  }),
  tagTypes: ["finance"],

  endpoints: (builder) => ({
    getDailySaleRecords: builder.query({
      query: (token) => ({
        url: "/daily_sale_records",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["finance"],
    }),
    getMonthlySaleRecords: builder.query({
      query: (token) => ({
        url: "/monthly_sale_records",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["finance"],
    }),
  }),
});

export const { useGetDailySaleRecordsQuery, useGetMonthlySaleRecordsQuery } =
  financeApi;
