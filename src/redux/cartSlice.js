import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state, action)=>{
            state.push(action.payload);
        },
        DeleteItem:(state, action)=>{
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {AddItem, DeleteItem} = cartSlice.actions;

export default cartSlice.reducer