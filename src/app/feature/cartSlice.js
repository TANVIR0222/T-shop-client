import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // add cart  items and all cart update
  reducers: {
    addToCard: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("items add cart");
      }

      state.totalPrice = setTotalPice(state);
    },
    // cart count update =>>> and  update total price
    updateQuantity: (state, action) => {
      const products = state.products.map((product) => {
        if (product._id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            if (product.quantity > 1) {
              product.quantity -= 1;
            }
          }
        }
        return product;
      });
      state.totalPrice = setTotalPice(state);
    },
    // clear cart
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});


export const setTotalPice = (state) =>
  state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price);
  }, 0);




export const { addToCard, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
