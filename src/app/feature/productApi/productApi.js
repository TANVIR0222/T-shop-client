import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/v1/product/` }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    newProductAdd: builder.mutation({
      query: (product) => ({
        url: `add-product`,
        method: "POST",
        body: product
      }),
      invalidatesTags: ['Product'],
    }),
    featchAllProduct: builder.query({
      query: ({ category, subCategory, minPrice, maxPrice, search, page, limit }) => {
        // Construct query parameters dynamically
        const params = new URLSearchParams({
          ...(category && { category }),
          ...(subCategory && { subCategory }),
          ...(minPrice && { minPrice }),
          ...(maxPrice && { maxPrice }),
          ...(search && { search }),
          ...(page && { page }),
          ...(limit && { limit }),
        });
        return `my-product?${params}`;
      },
      providesTags: ['Product'],
    }),
    // featchAllProduct: builder.query({
    //   query : () => ({
    //     url : `/all-product`,
    //     method: 'GET'
    //   })
    // }),
    deleteSingleProduct: builder.mutation({
      query: (id) => ({
        url: `delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Product'],
    }),
    featchSingleProduct: builder.query({
      query: (id) => ({
        url: `single-product/${id}`,
        method: "get",
      }),
      providesTags: ['Product'],
    }),
    updateSingleProduct: builder.mutation({
      query: ({id , ...res}) => ({
        url: `update-product/${id}`,
        method: "PATCH",
        body: res
      }),
      invalidatesTags: ['Product'],
    }),
    allProduct: builder.query({
      query: (search) => ({
        url: `product?search=${search}`,
        method: "GET",
      }),
      providesTags: ['Product'],
    }),
    relatedProduct: builder.query({
      query: (id) => ({
        url: `related-Product/${id}`,
        method: "GET",
      }),
      providesTags: ['Product'],
    }),
  }),
});

export const { useRelatedProductQuery , useNewProductAddMutation  , useFeatchAllProductQuery  , useDeleteSingleProductMutation , useFeatchSingleProductQuery  , useUpdateSingleProductMutation , useAllProductQuery } = productApi;
