import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            // guess: null,
=======
>>>>>>> bb4a6a08350cd9c59286db82ee96b1b9786c3b1b
            randNum: Math.floor(Math.random() * 100) + 1,
            count: []
        }
    }
    
<<<<<<< HEAD
    userGuess(nextGuess) {
        this.setState({
            // guess,
            count: [...this.state.count, nextGuess]
=======
/* ========== Add guess to state count ========== */
    userGuess(guess) {
        this.setState({
            count: [...this.state.count, guess]
>>>>>>> bb4a6a08350cd9c59286db82ee96b1b9786c3b1b
        })
    }

/* ========== Display feedback to user based on current guess ========== */
    userFeedback(guess, randNum) {
        if (guess === undefined) {
            return 'Make a guess!'
        } else if (guess > randNum) {
            return 'Guess too high';
        } else if (guess < randNum) {
            return 'Guess too small';
        } else if (guess === randNum) {
            return 'You win!!!';
        } 
    }

/* ========== Reset state ========== */
    userReset(){
        this.setState({
            count: [],
            randNum: Math.floor(Math.random() * 100) + 1
        })
    }
    
    render() {
        return (
            <div>
                <Header reset={() => this.userReset()}/>
                <GuessSection userGuess={(guess) => this.userGuess(guess)} 
                feedback={() => this.userFeedback(this.state.count[this.state.count.length-1], this.state.randNum)}
                />
                <GuessCount count={() => this.state.count.length} />
                <GuessList guesses={this.state.count} />
            </div>
        );
    }
}

