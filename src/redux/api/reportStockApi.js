import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const reportStockApi = createApi({
    reducerPath : 'reportStockApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://h.mmsdev.site/api/v1'}),
    tagTypes : ['reportStock'],
    endpoints : builder =>({
        
        getStockOverview : builder.query({
            query : ({token,p})=>({
                url : `/stock_report?stock_level=instock&page=${p}`,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['reportStock']

        }),
        getBestSellerBrand : builder.query({
            query : (token)=>({
                url : `/weekely_best_seller_brands`,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['reportStock']

        }),
        getBrandReport : builder.query({
            query : (token)=>({
                url : `/brand_report`,
                headers : {authorization : `Bearer ${token}`}
            }),
            providesTags : ['reportStock']

        })
    })
})

export const {useGetStockOverviewQuery,useGetBestSellerBrandQuery,useGetBrandReportQuery} = reportStockApi