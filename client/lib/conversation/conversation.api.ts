import { ISignup } from "@/types/auth";
import { User } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conversationApi = createApi({
  reducerPath: "conversationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/users",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getConversations: builder.query<User[], {searchQuery?: string }>({
      query: ({searchQuery = ""}) => ({
        url: "/",
        method: "GET",
        params: {searchQuery},
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery
} = conversationApi;
