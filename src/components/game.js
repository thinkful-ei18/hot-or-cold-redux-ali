import React from "react";

import { connect } from "react-redux";
import { makeGuess, resetGuess } from "../actions";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";

export class Game extends React.Component {
  /* ========== Add guess to state guesses ========== */
  userGuess(guess) {
    this.props.dispatch(makeGuess(guess));
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
    this.props.dispatch(resetGuess());
  }

  render() {
    return (
      <div>
        <Header reset={() => this.userReset()} />
        <GuessSection
          userGuess={guess => this.userGuess(guess)}
          feedback={() =>
            this.userFeedback(
              this.props.guesses[this.props.guesses.length - 1],
              this.props.randNum
            )
          }
        />
        <GuessCount guesses={() => this.props.guesses.length} />
        <GuessList guesses={this.props.guesses} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  randNum: state.randNum,
  guesses: state.guesses
});

export default connect(mapStateToProps)(Game);
