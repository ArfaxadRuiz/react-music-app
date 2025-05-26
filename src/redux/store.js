import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import libraryReducer from './slices/librarySlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    library: libraryReducer
  }
});

export default store;