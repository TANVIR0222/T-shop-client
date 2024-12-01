import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  cartReducer  from './feature/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)