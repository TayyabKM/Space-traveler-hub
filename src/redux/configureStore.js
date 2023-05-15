import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/Mission';
import rocketReducer from './rockets/Rocket';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});
export default store;
