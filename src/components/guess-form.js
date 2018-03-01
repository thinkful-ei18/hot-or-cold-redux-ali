import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            guess: ''
        }
    }
    // let guess;

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.guess(this.props.guess);
            }}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required ref={(input) => this.setState({guess: input})}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

