import {createSlice} from '@reduxjs/toolkit'

export const stockSlice = createSlice({
    name : 'stock',
    initialState : {
        data :null
    },
    reducers : {
        Stock : (state,{payload})=>{
            state.data = payload
            console.log(state.data);
        },

    }
})

export const {Stock} = stockSlice.actions
export default stockSlice.reducer