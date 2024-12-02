import getBaseUrl from '@/utils/getBaseUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/auth/` }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (newUser) => ({
        url: 'register',
        method: 'POST',
        body: newUser
      })
    }),
  }),
})

export const { useUserRegisterMutation } = authApi