import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";

const initialState = {};
const middlewares = [logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
