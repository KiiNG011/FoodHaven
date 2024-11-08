import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchItem: ''
  },
  reducers:{
    setSearch: (state,action) => {
      state.searchItem = action.payload
    }
  }
})

export const {setSearch} = searchSlice.actions

export default searchSlice.reducer