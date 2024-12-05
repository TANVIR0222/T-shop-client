import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  cartReducer  from './feature/cart/cartSlice'
import { authApi } from './feature/authApi/AuthApi'
import  userReducer  from './feature/authApi/userSlice'
import { userApi } from './feature/userApi/userApi'
import { imageApi } from './feature/imageUploadeApi/imageApi'
import { productApi } from './feature/productApi/productApi'
import { cartApi } from './feature/cart/cartApi'
import { orderApi } from './feature/orderApi/orderApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, imageApi.middleware , productApi.middleware , cartApi.middleware, orderApi.middleware),
})

setupListeners(store.dispatch)