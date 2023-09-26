import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import shopSlice from "./services/shopSlice";
import { stockApi } from "./api/stockApi";
import { mediaApi } from "./api/mediaApi";
import mediaSlice from "./services/mediaSlice";
import { productApi } from "./api/productApi";
import productSlice from "./services/productSlice";
import { brandApi } from "./api/brandApi";
import brandSlice from "./services/brandSlice";
import { shopApi } from "./api/shopApi";
import { profileApi } from "./api/profileApi";
import profileSlice from "./services/profileSlice";
<<<<<<< HEAD

import stockSlice from './services/stockSlice'
=======
import stockSlice from "./services/stockSlice";

// import {financeApi} from './api/financeApi';
>>>>>>> fe46d3117deb63e3cac7974f624a6eb8df4e8cdc
import { reportStockApi } from "./api/reportStockApi";

<<<<<<< HEAD
=======


>>>>>>> fe46d3117deb63e3cac7974f624a6eb8df4e8cdc
import { userApi } from "./api/userApi";
import userSlice from "./services/userSlice";
import { reportSaleApi } from "./api/reportSaleApi";
import reportSaleSlice from "./services/reportSaleSlice";
import { overviewApi } from "./api/overviewApi";
import overviewSlice from "./services/overviewSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,

    [mediaApi.reducerPath]: mediaApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [reportSaleApi.reducerPath]: reportSaleApi.reducer,
    [overviewApi.reducerPath]:overviewApi.reducer,
    [reportStockApi.reducerPath] : reportStockApi.reducer,

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
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      productApi.middleware,
      brandApi.middleware,
      stockApi.middleware,
      userApi.middleware,
      shopApi.middleware,
      profileApi.middleware,
      reportSaleApi.middleware,
      overviewApi.middleware,
      userApi.middleware,
<<<<<<< HEAD
      reportStockApi.middleware
=======
  
      // profileApi.middleware,

      // financeApi.middleware,

      reportStockApi.middleware,
>>>>>>> fe46d3117deb63e3cac7974f624a6eb8df4e8cdc


    ),
});

