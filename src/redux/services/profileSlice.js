import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name : 'profileSlice',
    initialState :{
        user : null,
        data : {
            name : null,
            email : null,
            password : null,
            phone_number : null,
            address : null,
            gender : null,
            date_of_birth : null,
            role : null,
            photo : null
        },
        password : {
            current_password : null,
            password : null,
            password_confirmation : null,
        }
    },
    reducers : {
        addUser : (state,{payload})=>{

            state.user = payload

        },
        addEmail : (state,{payload})=>{
            state.data.email = payload
        },
        addPassword : (state,{payload})=>{
            state.data.password = payload
        },
        addPhone_number : (state,{payload})=>{
            state.data.phone_number = payload
        },
        addAddress : (state,{payload})=>{
            state.data.address = payload
        },
        addGender : (state,{payload})=>{
            state.data.gender = payload
        },
        addDateOfBirth : (state,{payload})=>{
            state.data.date_of_birth = payload
        },
        addRole : (state,{payload})=>{
            state.data.role = payload
        },
        addName : (state,{payload})=>{
            state.data.name = payload
        },
        addPhoto : (state,{payload})=>{
            state.data.photo = payload
        },
        addCurrentP : (state,{payload})=>{
            state.password.current_password = payload
        },
        addp : (state,{payload})=>{
            state.password.password = payload
        },
        addPConfrim : (state,{payload})=>{
            state.password.password_confirmation = payload
        },
    }
})

export default profileSlice.reducer;
export const {addUser,addName,addCurrentP,addPConfrim,addp,addEmail,addPhone_number,addPassword,addRole,addPhoto,addAddress,addDateOfBirth,addGender} = profileSlice.actions