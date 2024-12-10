import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/v1/image/` }),
  endpoints: (builder) => ({
    imageUploade: builder.mutation({
      query: (formData) => ({
        url: `/uploade`,
        method: "POST",
        body: formData
      })
    }),
  }),
});

export const {useImageUploadeMutation} = imageApi;
