import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './reducers/userSlice';
import newReducer from './reducers/newSlice';
import klaimReducer from './reducers/klaimSlice';
import endorsReducer from './reducers/endorsSlice';

const store = configureStore({
  reducer: {
    username: userReducer,
    newApp: newReducer,
    klaim: klaimReducer,
    endors: endorsReducer
  },
});

export default store;
