/*********************************************************
* IMPORTS
*********************************************************/
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'components/exampleSlice/exampleSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dashboardApi } from 'components/dashboard/api';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboardApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { counter: counterState }
export type AppDispatch = typeof store.dispatch

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);