import { configureStore } from '@reduxjs/toolkit'
import studentsSlice from './studentsState'
import themeSlice from './ThemeState'

export const store = configureStore({
  reducer: {
    students: studentsSlice,
    theme: themeSlice
  },
})