import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name : '',
    date_of_birth : '',
    gender : null,
    photo : null,
    email : '',
    phone_number : '',
    password : null,
    address : '',
    role : '',
  },
 
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createName : (state,{payload})=>{
      state.user.name = payload
    },
    createGender : (state,{payload})=>{
      state.user.gender = payload
    },
    createDateOfBirth : (state,{payload})=>{
      state.user.date_of_birth = payload
    },
    addUserEmail : (state,{payload})=>{
      state.user.email = payload
    },
    createPhoto : (state,{payload})=>{
      state.user.photo = payload
    },
    createPhone : (state,{payload})=>{
      state.user.phone_number = payload
    },
    createPassword : (state,{payload})=>{
      state.user.password = payload
    },
    createAddress : (state,{payload})=>{
      state.user.address = payload
    },
    createRole: (state,{payload})=>{
      state.user.role = payload
    },
   

  },
});

export const { createName,createAddress,createDateOfBirth,addUserEmail,createGender,createPassword,createPhone,createPhoto,createRole } = userSlice.actions;
export default userSlice.reducer;


