import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer, rootSlice } from './reducers';

const logger = createLogger({ timestamp: true, diff: true, duration: true });
// const middleware = applyMiddleware(logger, thunk)
// export const store = createStore(rootReducer, middleware);

export const store = configureStore({
  reducer: rootReducer,
  // reducer: rootSlice.reducer,
  // middleware: new MiddlewareArray().concat(thunk, logger),
  middleware: [thunk, logger],
});

export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
export const useAppDispatch = () => useDispatch<AppDispatch>();
