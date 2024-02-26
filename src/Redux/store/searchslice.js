import { createSlice } from "@reduxjs/toolkit";


const searchslice=createSlice({

    name: 'searchBar',
  initialState: {
    searchTerm: '',
  },

    reducers:{
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
          },

    }
});

export const {setSearchTerm}=searchslice.actions;
export default searchslice.reducer