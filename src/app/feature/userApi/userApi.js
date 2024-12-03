import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/user/` }),
  endpoints: (builder) => ({
    fetchSingleUser: builder.query({
      query: (id) => `single-user/${id}`,
    }),
  }),
});

export const {useFetchSingleUserQuery} = userApi;
