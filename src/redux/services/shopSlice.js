import { createSlice,current } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name : 'shop',
    initialState  : {
        list : [],
        price : '',
        total : null,
        tax : null,
        recent : [],
    },
    reducers :{
        selectProduct :(state,{payload})=>{
            state.list = [...state.list,payload]
            // console.log(state.list)
        },
        changeQty :(state,{payload})=>{
            let fun = [] ;
            state.list.forEach((value)=>{
                console.log(value)
               if(value.id == payload.id) value.total_stock = Number(payload.qty)
                fun.push(value)
            })
            console.log(fun);
            state.list = fun
            console.log(state.list);

        },
        addTotal : (state,{payload})=>{
            state.total = payload
        },
        addTax : (state,{payload})=>{
            state.tax = payload
        },
        addRecent : (state,{payload})=>{
            state.recent = [...state.recent,payload]
        },
        createPrice :(state,{payload})=>{
            
            state.price+=payload
            console.log(state.price)
        },
        updatePrice :(state,{payload})=>{
            state.price+=payload.price
            console.log(state.price)
            let fun = [] ;
            state.list.forEach((value)=>{
                console.log(value)
               if(value.id == payload.id) value.sale_price = Number(state.price)
                fun.push(value)
            })
            console.log(fun);
            state.list = fun
            // state.price = payload.price

        },
        editPrice :(state,{payload})=>{
            
            const originalData = payload.pro.find((value)=>value.id == payload.id)
            console.log(originalData);
            
            const updatePrice = String(state.price)
            console.log(updatePrice)

            let fun = [] ;
            if(updatePrice.length == 1){
                state.list.forEach((value)=>{
                    console.log(value)
                   if(value.id == payload.id) value.sale_price = originalData.sale_price
                    fun.push(value)
                })
                state.list = fun
                state.price = ''
                console.log(state.list);
                console.log(fun);
            }else{

                state.list.forEach((value)=>{
                    console.log(value)
                    const editPrice = updatePrice.slice(`-${updatePrice.length}`,'-1')
                    state.price = editPrice
                    console.log(editPrice)
                    console.log(state.price)
                   if(value.id == payload.id) value.sale_price = Number(state.price)
                    fun.push(value)
                })

                
                state.list = fun
                console.log(state.list);
                
            }

            

        }
    }
})

export default shopSlice.reducer;
export const {selectProduct,addRecent,changeQty,addTax,addTotal,updatePrice,editPrice,createPrice} = shopSlice.actions