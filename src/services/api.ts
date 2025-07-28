import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Asset, ScreeningRequest, ScreeningResponse } from "../types"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      console.log('RTK Query: Preparing headers for request')
      return headers
    },
    fetchFn: async (input, init) => {
      console.log('RTK Query: Making request to:', input, init)
      return fetch(input, init)
    },
    parseErrorResponse: async (response, meta, arg) => {
      console.error('RTK Query parse error:', { response, meta, arg })
      const text = await response.text()
      console.error('Response text:', text)
      return { error: 'Failed to parse response', details: text }
    }
  }),
  endpoints: (builder) => ({
    getAssets: builder.query<Asset[], void>({
      query: () => "assets",
      transformErrorResponse: (response: any, meta, arg) => {
        console.error('Transform error response:', { response, meta, arg })
        return response
      }
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
