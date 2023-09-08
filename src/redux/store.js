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
import stockSlice from './services/stockSlice'
import {financeApi} from './api/financeApi';
import financeSlice from "./services/financeSlice";
import { userApi } from "./api/userApi";
import userSlice from "./services/userSlice";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,

    [mediaApi.reducerPath]: mediaApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    [shopApi.reducerPath] : shopApi.reducer,
    [profileApi.reducerPath] : profileApi.reducer,
    [financeApi.reducerPath]:financeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,


    authSlice: authSlice,
    mediaSlice: mediaSlice,
    productSlice: productSlice,
    brandSlice: brandSlice,
    shop: shopSlice,
    profile : profileSlice,
    stock :stockSlice,
    finance:financeSlice,userSlice:userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      productApi.middleware,
      brandApi.middleware,
      stockApi.middleware,

      shopApi.middleware,
      profileApi.middleware,

      financeApi.middleware,
      userApi.middleware

    ),

});

// setupListeners(store.dispatch);
