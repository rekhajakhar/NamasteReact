import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(store,action)=>{
            store.items.push(action.payload);
        },
        removeItem:(store, action)=>{
            store.items.pop();
        },
        clearCart:(store)=>{
            store.items.length=[];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;