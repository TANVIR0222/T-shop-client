import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/product/` }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    newProductAdd: builder.mutation({
      query: (product) => ({
        url: `/add-product`,
        method: "POST",
        body: product
      }),
      invalidatesTags: ['Product'],

    }),
  }),
});

export const { useNewProductAddMutation } = productApi;
