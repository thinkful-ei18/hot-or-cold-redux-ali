import { MAKE_GUESS, RESET } from "../actions";

const intialState = {
  randNum: Math.floor(Math.random() * 100) + 1,
  guesses: []
};

const guessReducer = (state = intialState, action) => {
  switch (action.type) {
    case MAKE_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.guess]
      };
    case RESET:
      return {
        ...state,
        guesses: [],
        randNum: Math.floor(Math.random() * 100) + 1
      };
    default:
      return state;
    //
  }
};

export default guessReducer;
