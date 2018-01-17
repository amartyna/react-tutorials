import React, { Component } from 'react';
import Stars from '../Stars/Stars';
import Button from '../Button/Button';
import Answer from '../Answer/Answer';
import Numbers from '../Numbers/Numbers';
import './Game.scss';

// Game Component holds all the components, its styld with bootstrap and fontawesome
class Game extends Component {
    render() {
        return (
            <div className="container">
               <h3>Play Nine</h3>
               <hr />
               <div className="row">
                <Stars />
                <Button />
                <Answer />
               </div>
                <Numbers />
            </div>
        );
    }
}

export default Game;
