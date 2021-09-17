import { beerApi } from '../services/beer';
import { configureStore } from '@reduxjs/toolkit';
import filter from './beer';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';

const middleware: any[] = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = configureStore({
  reducer: { [beerApi.reducerPath]: beerApi.reducer, filter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware, beerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export { store };
