import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import boardSliceReducer from './slices/boardSlice.js';
import authSliceReducer from './slices/authSlice.js';


const store = configureStore({
  reducer: {
    [ apiSlice.reducerPath ]: apiSlice.reducer,
    boards: boardSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
});






export default store;