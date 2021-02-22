import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const logger = createLogger();
// const middleware = applyMiddleware(logger, thunk)
// export const store = createStore(rootReducer, middleware);

export const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk, logger)
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()