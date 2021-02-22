import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk)

export const store = createStore(rootReducer, middleware);