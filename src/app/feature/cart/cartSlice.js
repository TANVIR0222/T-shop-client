import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      
      state.products = action.payload
      console.log(state.products);
      
      
    },
    // cart count update =>>> and  update total price
    updateQuantity: (state, action) => {
      const products = state.products?.map((product) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
            console.log(product.quantity , 'sdd');
            
          } else if (action.payload.type === "decrement") {
            if (product.quantity > 1) {
              product.quantity -= 1;
            }
          }
        }
        return product;
      });
      state.price = setTotalPice(state);
    },
    // clear cart
    clearCart: (state) => {
      state.products = [];
      state.price = 0;
      console.log(state.price);
      
    },
  },
});


export const setTotalPice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price);
  }, 0);




export const { addToCard, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;