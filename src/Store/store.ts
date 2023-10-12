import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { StarWarsPeopleAPI } from '../Services/api';
import commonSlice from './Common/commonSlice';

const rootReducer = combineReducers({
  common: commonSlice,
});

export const store = configureStore({
  reducer: {
    rootReducer,
    [StarWarsPeopleAPI.reducerPath]: StarWarsPeopleAPI.reducer,
  },
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware().concat(
      StarWarsPeopleAPI.middleware,
    );

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
