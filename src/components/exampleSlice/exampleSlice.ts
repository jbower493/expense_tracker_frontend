/*********************************************************
* IMPORTS
*********************************************************/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';


/*********************************************************
*   TYPES
*********************************************************/
// Define a type for the slice state
export interface CounterState {
    theCounter: number
};


// Define the initial state using that type
const initialState: CounterState = {
    theCounter: 1
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addTo: (state, action: PayloadAction<number>) => {
            state.theCounter += action.payload;
        },
        decrement: (state) => {
            if (state.theCounter > 0) state.theCounter --;
        }
    }
});

export const { addTo, decrement } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.theCounter

export default counterSlice.reducer;