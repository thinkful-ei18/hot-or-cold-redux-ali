//This stores the state

import { createStore } from "redux";
import guessReducer from "./reducers/guesses";

export default createStore(guessReducer);
