import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // guess: null,
            randNum: Math.floor(Math.random() * 100) + 1,
            count: []
        }
    }
    
    userGuess(nextGuess) {
        this.setState({
            // guess,
            count: [...this.state.count, nextGuess]
        })
    }
    
    userFeedback(guess, randNum) {
        if (guess === null) {
            return 'Make a guess!'
        } else if (guess > randNum) {
            return 'Guess too high';
        } else if (guess < randNum) {
            return 'Guess too small';
        } else if (guess === randNum) {
            return 'You win!!!';
        } 
    }
    
    render() {
        return (
            <div>
                <Header />
                <GuessSection userGuess={(guess) => this.userGuess(guess)} 
                feedback={() => this.userFeedback(this.state.guess, this.state.randNum)}
                />
                <GuessCount count={() => this.state.count.length} />
                <GuessList guesses={this.state.count} />
            </div>
        );
    }
}

