import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Asset, ScreeningRequest, ScreeningResponse } from "../types"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAssets: builder.query<Asset[], void>({
      query: () => "assets",
    }),
    createScreeningRequest: builder.mutation<ScreeningResponse, ScreeningRequest>({
      query: (request) => ({
        url: "screenings",
        method: "POST",
        body: request,
      }),
    }),
  }),
})

export const { useGetAssetsQuery, useCreateScreeningRequestMutation } = api
