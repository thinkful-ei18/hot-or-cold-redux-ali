import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: 50,
        }
    }

    userGuess(guess) {
        this.setState({
            guess,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection userGuess={(guess) => this.userGuess(guess)} feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

