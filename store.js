// store.js
import { configureStore } from '@reduxjs/toolkit';
import yourSlice from './yourSlice'; // import your reducers

export const store = configureStore({
  reducer: {
    yourFeature: yourSlice,
  },
});
