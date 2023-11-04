import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Slices/TasksSlice';

export const store = configureStore({
  reducer: {
    tasks:taskReducer
  },
})