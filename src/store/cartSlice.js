import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            //here state points to the initial state
            //actions points out to the action that are going to be performed 
            //action.payload points out to the state that is going to be updated
            state.push(action.payload);
        },
        remove(state, action) {
          return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
