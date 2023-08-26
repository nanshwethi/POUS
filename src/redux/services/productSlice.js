import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  product: null,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      // (state.product = [...state.product,{...payload}]);
      (state.product =payload.product), 

      // (state.product = payload.product);
    //   (state.token = payload.token);
      Cookies.set("product", JSON.stringify(state.product));
    //   Cookies.set("token", state.token);
    },
    
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
