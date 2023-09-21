import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  products: null,
  oldData : null,
  data : {
    name : null,
    brand_id : null,
    // user_id : null,
    actual_price : null,
    sale_price : null ,
    unit : null ,
    total_stock : null,
    more_information : null,
    photo : null
  }
};

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
      addProducts: (state, { payload }) => {
        (state.products = payload.products),
          Cookies.set("products", JSON.stringify(state.products));
      },
      addOldData : (state,{payload})=>{

        state.oldData = payload

      },
      updateName : (state,{payload})=>{
        
        state.data.name = payload
      },
      updateBrandId : (state,{payload})=>{
        
        state.data.brand_id = payload
      },
      updateStock : (state,{payload})=>{
        
        state.data.total_stock = payload
      },
      updateActualPrice : (state,{payload})=>{
        
        state.data.actual_price = payload
      },
      updateSalePrice : (state,{payload})=>{
        
        state.data.sale_price = payload
      },
      updateMoreInfo : (state,{payload})=>{
        
        state.data.more_information = payload
      },
      updateUnit : (state,{payload})=>{
        
        state.data.unit = payload
      },
      updatePhoto : (state,{payload})=>{
        
        state.data.photo = payload
      },

    },
    

});

export const { addProducts,addOldData , updateName,updatePhoto,updateStock,updateBrandId,updateActualPrice,updateSalePrice,updateMoreInfo,updateUnit} = productSlice.actions;
export default productSlice.reducer;
