// eslint-disable-next-line
import React, { Component } from 'react';
import './Button.scss';

const Button = (props) => {
    let button;
    switch (props.asnwerIsCorrect) {
        case true:
            button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                        <i className="fa fa-check" />
                     </button>;
        break;
        case false:
            button = <button className="btn btn-danger">
                        <i className="fa fa-times" />
                     </button>;
        break;
        default:
            button = <button onClick={props.checkAnswer} className="btn" disabled={props.selectedNumbers.length === 0}>=</button>;
        break;
    }

    return (
        //we disable a button when there is no numbers selected, therefore the length of selectedNumbers equals zero
        <div className="col-2 text-center">
            {button}
            <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws === 0} style={{ marginTop: 10, marginBottom: 10 }}>
                <i className="fa fa-refresh" /> {props.redraws}
            </button>
        </div>
    );
}

export default Button;
