import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  cartReducer  from './feature/cart/cartSlice'
import { authApi } from './feature/authApi/AuthApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)