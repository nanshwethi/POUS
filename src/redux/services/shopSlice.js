import { createSlice,current } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name : 'shop',
    initialState  : {
        list : [],
        price : '',
        total : null,
        tax : null,
        recent : [],
        selectedList : null
    },
    reducers :{
        selectProduct :(state,{payload})=>{
            
            state.list = [...state.list,{...payload,total_stock : 1}]
            console.log(state.list)
        },
        changeQty :(state,{payload})=>{
            
            const last = state.list.find((v)=> v.id == payload.id)
            if(last.total_stock == 1){
                let fun = [] ;
                state.list.forEach((value)=>{
                    console.log(value)
                if(value.id == payload.id) value.total_stock = payload.qty
                    fun.push(value)
                })
                console.log(fun);
                state.list = fun
                console.log(state.list);
            }else{
                let fun = [] ;
            state.list.forEach((value)=>{
                console.log(value)
            if(value.id == payload.id) value.total_stock += payload.qty
                fun.push(value)
            })
            console.log(fun);
            state.list = fun
            console.log(state.list);
            }
            
            
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

        },
        deleteQty :(state,{payload})=>{

            const last = state.list.find((v)=> v.id == payload.id)

            if(last.total_stock.length == 1){
                let fun = []
                state.list.forEach((v)=>{
                    if(v.id == payload.id) v.total_stock = ''
                    fun.push(v)
                })

                state.list = fun

            }else if(last.total_stock == ''){
                const filter = state.list.filter((v)=> v.id != payload.id)
                state.list = [...filter]
                if(state.list.length >= 1){
                    state.selectedList = state.list[state.list.length-1].id

                }
                console.log(state.list);
                console.log(state.selectedList);
            }else{
                let fun = []
                state.list.forEach((v)=>{
                    if(v.id == payload.id) v.total_stock = (v.total_stock).slice(`-${v.total_stock.length}`,'-1')
                    fun.push(v)
                })

                state.list = fun
            }

        },
        setSelectedList : (state,{payload})=>{
            state.selectedList = payload
        }
    }
})

export default shopSlice.reducer;
export const {selectProduct,setSelectedList,deleteQty,addRecent,changeQty,addTax,addTotal,updatePrice,editPrice,createPrice} = shopSlice.actions