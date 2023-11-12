import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './locations/index'

export const store = configureStore({
  reducer: {
    locations: locationReducer,
  },
})