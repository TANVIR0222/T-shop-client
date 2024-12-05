import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/cart/` }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    addProductCard: builder.mutation({
      query: (formData) => ({
        url: `add-cart`,
        method: "POST",
        body: formData
      }),
      invalidatesTags: ["Cart"]
    }),
    fetchAllCart: builder.query({
      query: () => ({
        url: `all-cart`,
        method: "GET",
      }),
      providesTags: ["Cart"]
    }),
    deleteSingleCart: builder.mutation({
      query: (id) => ({
        url: `delete-cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"]
    }),
    fetchSingleCart: builder.query({
      query: (id) => ({
        url: `single-cart/${id}`,
        method: "GET",
      }),
      providesTags: ["Cart"]
    }),
  }),
});

export const {useAddProductCardMutation , useFetchAllCartQuery , useDeleteSingleCartMutation , useFetchSingleCartQuery} = cartApi;

