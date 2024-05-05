import { ISignup } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
      reducerPath: "authApi",
      baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/auth" }),
      endpoints: (builder) => ({
            signup: builder.query<void, ISignup>({
                  query: (user) => ({
                        url: "/signup",
                        method: "post",
                        body: user
                  })
            }),
            login: builder.query<void, Pick<ISignup, "userName" | "password">>({
                  query: (user) => ({
                        url: "/login",
                        method: "post",
                        body: user
                  })
            }),
            logout: builder.query<void, void>({
                  query: () => ({
                        url: "/logout",
                        method: "post"
                  })
            })
      })
})

export const { useLazySignupQuery, useLazyLoginQuery, useLazyLogoutQuery } = authApi;