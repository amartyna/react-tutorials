import React, { Component } from 'react';
import Stars from '../Stars/Stars';
import Button from '../Button/Button';
import Answer from '../Answer/Answer';
import Numbers from '../Numbers/Numbers';
import DoneFrame from '../DoneFrame/DoneFrame';
import './Game.scss';
const _ = require('lodash');

// Game Component holds all the components, its styld with bootstrap and fontawesome


var possibleCombinationSum = function (arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount; i++) {
        var combinationSum = 0;
        for (var j = 0; j < listSize; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
    }
    return false;
};

class Game extends Component {

    // we define static function in class Game witch gives us the random number

    static randomNumber = () => {
       return 1 + Math.floor(Math.random() * 9);
    }

    static initialState = () => ({
        selectedNumbers: [],
        randomNumbersOfStars: Game.randomNumber(),
        asnwerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: null,
    })

    state = Game.initialState();

    pickNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            asnwerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            asnwerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }));
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            asnwerIsCorrect: 
            prevState.randomNumbersOfStars === prevState.selectedNumbers.reduce((a,b) => a + b, 0)
        }));
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            asnwerIsCorrect: null,
            selectedNumbers: [],
            randomNumbersOfStars: Game.randomNumber(),
        }), this.updateDoneStatus);
    }

    redraw = () => {
        if (this.state.redraws === 0) {
            return;
        }
        this.setState(prevState => ({
            asnwerIsCorrect: null,
            selectedNumbers: [],
            randomNumbersOfStars: Game.randomNumber(),
            redraws: prevState.redraws - 1,
        }), this.updateDoneStatus);
    }

    possibleSolutions = ({randomNumbersOfStars, usedNumbers}) => {
        const possibleNumbers = _.range(1,10).filter(number => usedNumbers.indexOf(number) === -1);

        return possibleCombinationSum(possibleNumbers, randomNumbersOfStars);
    };

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: 'You Win!'};
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: 'Game Over'};
            }
        })
    }

    resetGame = () => {
        this.setState(Game.initialState());
    }

    render() {
        // to minify our code we introduce selectedNUmbers and randomNumbersOfStars as this.state;
        // and that we can use them without repeating this.state every time

        const { selectedNumbers, randomNumbersOfStars, asnwerIsCorrect, usedNumbers, redraws, doneStatus } = this.state;

        return (
            <div className="container">
               <h3>Stars</h3>
               <hr />
               <div className="row">
                <Stars numberOfStars={randomNumbersOfStars}/>
                <Button 
                    selectedNumbers={selectedNumbers}
                    checkAnswer={this.checkAnswer}
                    asnwerIsCorrect={asnwerIsCorrect}
                    acceptAnswer={this.acceptAnswer}
                    redraw={this.redraw}
                    redraws={redraws}
                    />
                <Answer 
                    selectedNumbers={selectedNumbers}
                    unselectNumber={this.unselectNumber}
                    />
               </div>
               
               {doneStatus ?
                <DoneFrame 
                    doneStatus={doneStatus}
                    resetGame={this.resetGame}/> :
                <Numbers 
                    selectedNumbers={selectedNumbers}
                    pickNumber={this.pickNumber}
                    usedNumbers={usedNumbers}
                /> 
               }

            </div>
            //note that turnary operator
        );
    }
}

export default Game;
