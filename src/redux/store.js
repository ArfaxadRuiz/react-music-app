// src/redux/store.js
import { createStore } from 'redux';
import libraryReducer from './libraryReducer';

const store = createStore(
  libraryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;