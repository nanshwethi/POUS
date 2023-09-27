import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import shopSlice from "./services/shopSlice";
import { stockApi } from "./api/stockApi";
import { mediaApi } from "./api/mediaApi";
import mediaSlice from "./services/mediaSlice";
import { productApi } from "./api/productApi";
import productSlice from "./services/productSlice";
import brandSlice from "./services/brandSlice";
import { shopApi } from "./api/shopApi";
import { profileApi } from "./api/profileApi";
import profileSlice from "./services/profileSlice";
import stockSlice from "./services/stockSlice";
import { reportStockApi } from "./api/reportStockApi";
import { userApi } from "./api/userApi";
import userSlice from "./services/userSlice";
import { reportSaleApi } from "./api/reportSaleApi";
import reportSaleSlice from "./services/reportSaleSlice";
import { overviewApi } from "./api/overviewApi";
import overviewSlice from "./services/overviewSlice";
import { branApi } from "./api/branApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [reportSaleApi.reducerPath]: reportSaleApi.reducer,
    [overviewApi.reducerPath]:overviewApi.reducer,
    [reportStockApi.reducerPath] : reportStockApi.reducer,
    [branApi.reducerPath] : branApi.reducer,

    authSlice: authSlice,
    mediaSlice: mediaSlice,
    productSlice: productSlice,
    brandSlice: brandSlice,
    shop: shopSlice,
    profile: profileSlice,
    stock: stockSlice,
    userSlice: userSlice,
    reportSaleSlice: reportSaleSlice,
    overviewSlice:overviewSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {serializableCheck: false}
    ).concat(
      authApi.middleware,
      mediaApi.middleware,
      productApi.middleware,
      stockApi.middleware,
      userApi.middleware,
      shopApi.middleware,
      profileApi.middleware,
      reportSaleApi.middleware,
      overviewApi.middleware,
      userApi.middleware,
      reportStockApi.middleware,
      branApi.middleware
    )
  
});

