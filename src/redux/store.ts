import ReduxLogger from 'redux-logger';
import ReduxSaga from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [...getDefaultMiddleware(), ReduxLogger];

const makeStore = (context: any) =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware(),
  });
const wrapper = createWrapper(makeStore, { debug: true });
export type AppDispatch = typeof store.dispatch;
export default wrapper;
