import { ISignup } from "@/types/auth";
import { Message } from "@/types/message";
import { User } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const formatDate = (date: string) => {
  return date.split(".")[0].split("T").toReversed().join("/");
}

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/messages",
    credentials: "include",
  }),
  tagTypes: ["Messages"],
  endpoints: (builder) => ({
    sendMessage: builder.mutation<
      Message,
      { receiverId: string; message: string }
    >({
      query: ({ receiverId, message }) => ({
        url: "/send/" + receiverId,
        method: "POST",
        body: { message },
      }),
      invalidatesTags: ["Messages"],
    }),
    getMessages: builder.query<Message[], { receiverId: string }>({
      query: ({ receiverId }) => ({
        url: "/" + receiverId,
        method: "GET",
      }),
      transformResponse: (res: Message[]) =>
        res.map((message) => ({ ...message, createdAt: formatDate(message.createdAt)})),
      providesTags: ["Messages"],
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesQuery } = messagesApi;
