import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randNum: Math.floor(Math.random() * 100) + 1,
            count: []
        }
    }
    
/* ========== Add guess to state count ========== */
    userGuess(guess) {
        this.setState({
            count: [...this.state.count, guess]
        })
    }

/* ========== Display feedback to user based on current guess ========== */
    userFeedback(guess, randNum) {
        if (guess === undefined) {
            return 'Make a guess!'
        } else if (guess > randNum && guess < randNum+10) {
            return 'Guess too high but warm';
        } else if (guess < randNum && guess > randNum-10) {
            return 'Guess too small but warm';
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

