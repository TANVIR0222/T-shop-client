import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/order/` }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    userOrder: builder.mutation({
      query: (newData) => ({
        url: `place`,
        method: "POST",
        body: newData
      }),
      invalidatesTags: ["Order"]
    }),
    userAllOrder: builder.query({
      query: () => ({
        url: `list`,
        method: "GET",
      }),
      providesTags: ["Order"]
    }),
    fetchSingleOrder: builder.query({
      query: (id) => ({
        url: `single-list/${id}`,
        method: "GET",
      }),
      providesTags: ["Order"]
    }),
    updateStatusOrder: builder.mutation({
      query: ({id , ...res}) => ({
        url: `status/${id}`,
        method: "PATCH",
        body: res
      }),
      invalidatesTags: ["Order"]
    }),
    stripOrder: builder.mutation({
      query: (newPayment) => ({
        url: `stripe`,
        method: "POST",
        body: newPayment
      }),
      invalidatesTags: ["Order"]
    }),
    deletCartOrder: builder.mutation({
      query: (newData) => ({
        url: `verifyStripe`,
        method: "POST",
        body: newData
      }),
      invalidatesTags: ["Order"]
    }),
  }),
});

export const { useDeletCartOrderMutation ,useUserOrderMutation , useUserAllOrderQuery , useFetchSingleOrderQuery , useUpdateStatusOrderMutation , useStripOrderMutation } = orderApi;
