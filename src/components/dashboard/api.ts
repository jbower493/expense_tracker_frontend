/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* COMPONENTS *******************************************/
import { Category } from 'components/dashboard/models';


/*********************************************************
*   TYPES
*********************************************************/
type DashboardState = {
    categories: Category[]
}


/*********************************************************
*   API
*********************************************************/
// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getCategories: builder.query<DashboardState, string>({
            query: () => `categories`,
        }),
    }),
})


/*********************************************************
*   EXPORT
*********************************************************/
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = dashboardApi;