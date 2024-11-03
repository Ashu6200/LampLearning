import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: "account",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.SERVER_BASE_URL,
    }),
    endpoints: builder => ({}),
});
