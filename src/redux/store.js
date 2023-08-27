import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import { mediaApi } from "./api/mediaApi";
import mediaSlice from "./services/mediaSlice";
import { productApi } from "./api/productApi";
import productSlice from "./services/productSlice";
import { brandApi } from "./api/brandApi";
import brandSlice from "./services/brandSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,

    authSlice: authSlice,
    mediaSlice: mediaSlice,
    productSlice: productSlice,
    brandSlice: brandSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      productApi.middleware,
      brandApi.middleware
    ),
});

setupListeners(store.dispatch);
