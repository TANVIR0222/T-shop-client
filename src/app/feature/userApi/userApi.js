import getBaseUrl from "@/utils/getBaseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/user/` }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    fetchSingleUser: builder.query({
      query: (id) => `single-user/${id}`,
      providesTags: ["User"],
    }),
    fetchAllUser: builder.query({
      query: () => `all-user`,
      providesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, ...res }) => ({
        url: `update-role/${id}`,
        method: "PATCH",
        body: res,
      }),
      invalidatesTags: ["User"],
    }),
    deleteSingleUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useFetchSingleUserQuery,
  useFetchAllUserQuery,
  useUpdateUserRoleMutation,
  useDeleteSingleUserMutation,
} = userApi;
