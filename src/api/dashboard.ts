// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DashboardState } from 'components/dashboard/dashboardSlice';

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
      getCategories: builder.query<DashboardState, string>({
        query: () => `categories`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetCategoriesQuery } = dashboardApi;