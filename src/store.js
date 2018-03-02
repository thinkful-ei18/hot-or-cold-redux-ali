//This stores the state

import { createStore } from "redux";
import guessReducer from "./reducers/guesses";

const store = createStore(guessReducer);

export default store;
