import { ISignup } from "@/types/auth";
import { User } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/auth", credentials: "include" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signup: builder.query<void, ISignup>({
      query: (user) => ({
        url: "/signup",
        method: "post",
        body: user,
      }),
    }),
    login: builder.mutation<User, Pick<ISignup, "userName" | "password">>({
      query: (user) => ({
        url: "/login",
        method: "post",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "post",
      }),
      invalidatesTags: ["User"],
    }),
    authUser: builder.query<User, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useLazySignupQuery, useLoginMutation, useLogoutMutation, useAuthUserQuery } = authApi;