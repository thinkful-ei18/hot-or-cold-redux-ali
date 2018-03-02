export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

export const RESET = "RESET";
export const resetGuess = guess => ({
  type: RESET,
  guess
});
