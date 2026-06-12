// Redux Toolkit helper to create Slice
import { createSlice } from "@reduxjs/toolkit";

// Initial State of Cart
// Cart is empty when application starts
const initialState = {
  items: [] as any[]
};

// Cart Slice
// All cart-related logic lives here
const cartSlice = createSlice({

  // Unique name for this slice
  name: "cart",

  // Initial state of cart
  initialState,

  // Reducers = Actions + State Update Logic
  reducers: {

    // Add Product To Cart
    addToCart: (state, action) => {

      // action.payload contains product data
      // state.items is cart array

      // Add new product into cart array
      state.items.push(action.payload);
    }
  }
});

// Export Action
// Used like:
// dispatch(addToCart(product))
export const { addToCart } = cartSlice.actions;

// Export Reducer
// Store needs this reducer
export default cartSlice.reducer;