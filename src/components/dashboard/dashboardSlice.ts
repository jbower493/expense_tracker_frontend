// Imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';


// Types

export type Category = {
    categoryName: string,
    budget: number,
    spend: number,
    priority: 1 | 2 | 3
};

// Define a type for the slice state
export interface DashboardState {
    categories: Category[]
};


// Define the initial state using that type
const initialState: DashboardState = {
    categories: []
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addOne: (state, action: PayloadAction<Category>) => {
            state.categories.push(action.payload)
        },
        removeOne: (state) => {
            if (state.categories.length < 0) state.categories.pop();
        }
    }
});

export const { addOne, removeOne } = dashboardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.dashboard.categories

export default dashboardSlice.reducer;