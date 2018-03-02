import React from 'react';
import InfoModal from './info-modal';
import './top-nav.css';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: false,
        }
    }

    overlaySet() {
        this.setState({
            overlay: true,
        })
    }
    render() {
        return (
            <div>
                {this.state.overlay && <InfoModal />}
                <nav>
                    <ul className="clearfix">
                        <li>
                            <a onClick={() => this.overlaySet()} className="what" href="#">
                                What?
                    </a>
                        </li>
                        <li>
                            <a onClick={() => this.props.reset()} className="new" href="#">
                                + New Game
                    </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}

