import { createSlice } from '@reduxjs/toolkit'

// Création du Slice pour le thème
const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light',
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        },
    },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer