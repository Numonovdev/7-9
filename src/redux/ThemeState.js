import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'light'
};

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        light: (state) => {
            state.value = 'light';
        },
        dark: (state) => {
            state.value = 'dark';
        }
    }
});

export default ThemeSlice.reducer;
export const { light, dark } = ThemeSlice.actions;
