import React from "react";

import { connect } from "react-redux";
import { RESET, MAKE_GUESS } from "../actions";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randNum: Math.floor(Math.random() * 100) + 1,
      guesses: []
    };
  }

  /* ========== Add guess to state guesses ========== */
  userGuess(guess) {
    this.setState({
      guesses: [...this.state.guesses, guess]
    });
  }

  /* ========== Display feedback to user based on current guess ========== */
  userFeedback(guess, randNum) {
    if (guess === undefined) {
      return "Make a guess!";
    } else if (guess > randNum && guess < randNum + 10) {
      return "Guess too high but warm";
    } else if (guess < randNum && guess > randNum - 10) {
      return "Guess too low but warm";
    } else if (guess > randNum) {
      return "Guess too high";
    } else if (guess < randNum) {
      return "Guess too small";
    } else if (guess === randNum) {
      return "You win!!!";
    }
  }

  /* ========== Reset state ========== */
  userReset() {
    this.setState({
      guesses: [],
      randNum: Math.floor(Math.random() * 100) + 1
    });
  }

  render() {
    return (
      <div>
        <Header reset={() => this.userReset()} />
        <GuessSection
          userGuess={guess => this.userGuess(guess)}
          feedback={() =>
            this.userFeedback(
              this.state.guesses[this.state.guesses.length - 1],
              this.state.randNum
            )
          }
        />
        <GuessCount guesses={() => this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
