import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  brands: [],
  oldData : null ,
  data : {
    name : null ,
    company : null ,
    description : null ,
    user_id : 1 ,
    agent : null ,
    phone_no : null ,
    photo : null

  },
  updateData : {
    name : null ,
    company : null ,
    description : null ,
    agent : null ,
    phone_no : null ,
  },
  updateStock : {
    user_id : 1,
    product_id : null,
    quantity : null ,
    more : null
  }
  
};

export const brandSlice = createSlice({
  name: "brandSlice",
  initialState,
  reducers: {
    addBrands: (state, { payload }) => {
      (state.brands = payload.brands),
        Cookies.set("brands", JSON.stringify(state.brands));
    },
    addOldData :(state,{payload})=>{
        state.oldData = payload
    },
    addName : (state,{payload})=>{

      state.data.name = payload

    },
    addCompany : (state,{payload})=>{

      state.data.company = payload

    },
    addDesc : (state,{payload})=>{

      state.data.description = payload

    },
    addUserId : (state,{payload})=>{

      state.data.user_id = payload

    },
    addAgent : (state,{payload})=>{

      state.data.agent = payload

    },
    addPhone : (state,{payload})=>{

      state.data.phone_no = payload

    },
    addPhoto : (state,{payload})=>{

      state.data.photo = payload

    },
    addUpdateName : (state,{payload})=>{

      state.updateData.name = payload

    },
    addUpdateCompany : (state,{payload})=>{

      state.updateData.company = payload

    },
    addUpdateDesc : (state,{payload})=>{

      state.updateData.description = payload

    },
    addUpdateAgent : (state,{payload})=>{

      state.updateData.agent = payload

    },
    addUpdatePhone : (state,{payload})=>{

      state.updateData.phone_no = payload

    },
    addUpdateData :(state,{payload})=>{
      state.updateData = payload
    },
   
    addStockProduct : (state,{payload})=>{
      state.updateStock.product_id = payload
    },
    addStockQty : (state,{payload})=>{
      state.updateStock.quantity = Number(payload)
    },
    addStockMore : (state,{payload})=>{
      state.updateStock.more = payload
    },
  },
});

export const { addBrands,addUpdateData,addStockMore,addStockProduct,addStockQty , addOldData,addPhoto, addName,addCompany,addDesc,addUserId,addAgent,addPhone,addUpdateAgent,addUpdateCompany,addUpdateDesc,addUpdateName,addUpdatePhone} = brandSlice.actions;
export default brandSlice.reducer;
