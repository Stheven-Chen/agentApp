import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './reducers/userSlice';

const store = configureStore({
  reducer: {
    username: userReducer,
  },
});

export default store;
