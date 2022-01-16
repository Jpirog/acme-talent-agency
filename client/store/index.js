import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";

import clients from "./clients";
import trips from "./trips";
import destinations from "./destinations";

const reducer = combineReducers ({
  clients,
  trips,
  destinations,
})

//STORE
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)))

export default store