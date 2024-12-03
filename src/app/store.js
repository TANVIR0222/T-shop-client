import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  cartReducer  from './feature/cart/cartSlice'
import { authApi } from './feature/authApi/AuthApi'
import  userReducer  from './feature/authApi/userSlice'
import { userApi } from './feature/userApi/userApi'
import { imageApi } from './feature/imageUploadeApi/imageApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, imageApi.middleware),
})

setupListeners(store.dispatch)