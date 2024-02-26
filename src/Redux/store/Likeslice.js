import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const likeslice=createSlice({

    name:'like',
    initialState,

    reducers:{
        addlike(state,action){
            const newItem = action.payload;
            // Check if the item already exists in the cart
            const existingItemIndex = state.findIndex(item => item.id === newItem.id);
            if (existingItemIndex === -1) {
                // If the item doesn't exist, add it to the cart
                state.push(newItem);
            } else {
                // If the item already exists, you can update its quantity or do nothing
                // For example, you can increment the quantity of the existing item
                state[existingItemIndex].quantity += newItem.quantity;
            }
        },

        deletelike(state,action){
            return state.filter(item=>item.id!==action.payload)
        },
    }
});

export const{addlike,deletelike}=likeslice.actions;

export default  likeslice.reducer