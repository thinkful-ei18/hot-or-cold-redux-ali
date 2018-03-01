import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={() => alert(` 1. I pick a random secret number between 1 to 100 and keep it hidden. \n 2. You need to guess until you can find the hidden secret number. \n 3. You will get feedback on how close ("hot") or far ("cold") your guess is.
                    `)} className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={() => props.reset()} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

