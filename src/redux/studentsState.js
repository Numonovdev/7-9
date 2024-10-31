import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        deletee: (state, action) => {
            state.value = state.value.filter(card => card.id !== action.payload);
        },
        allDelete: (state) => {
            state.value = [];
        },
        upStudent: (state, action) => {
            state.value = state.value.map(card => {
                if (card.id === action.payload.id) {
                    return { ...card, ...action.payload }; 
                }
                return card;
            });
        }
    }
});

export default studentsSlice.reducer;
export const { add, deletee, allDelete, upStudent } = studentsSlice.actions;
