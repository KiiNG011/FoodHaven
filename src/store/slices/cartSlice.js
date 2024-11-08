import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addTocart: (state,action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    incrementQuantity: (state,action) => {
      state.cart = state.cart.map(item => item.id === action.payload ? 
        {...item,qty:item.qty+1} : item )
    },
    decrementQuantity: (state,action) => {
      state.cart = state.cart.map(item => item.id === action.payload ? 
        {...item,qty:item.qty-1} : item )
    }
  }
})

export const {addTocart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions

export default cartSlice.reducer