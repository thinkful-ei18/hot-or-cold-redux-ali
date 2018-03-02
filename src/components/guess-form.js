import React from "react";

import "./guess-form.css";

export default class GuessForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(this);
          this.props.guess(this.guess.value);
        }}
      >
        <input
          type="text"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder="Enter your Guess"
          required
          ref={input => (this.guess = input)}
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}
