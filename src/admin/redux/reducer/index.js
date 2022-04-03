import ThemeReducer from "./ThemeReducer";
import AppReducers from "./AppReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ ThemeReducer, AppReducers });

export default rootReducer;
