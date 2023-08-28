import {createSlice} from '@reduxjs/toolkit'

export const stockSlice = createSlice({
    name : 'stock',
    initialState : {
        data :null
    },
    reducers : {
        addStockUnitQty : (state,{payload})=>{
            state.data = payload
            console.log(state.data);
        },
        
    }
})

export const {addStockUnitQty} = stockSlice.actions
export default stockSlice.reducer