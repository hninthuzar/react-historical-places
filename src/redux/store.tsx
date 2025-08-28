
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./reducer";

const middlewares = [thunk as any];

const store = createStore(
  combineReducers({
    data: reducer,
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;


