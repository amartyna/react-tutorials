// eslint-disable-next-line
import React, { Component } from 'react';
import './DoneFrame.scss';
// const _ = require('lodash');

const DoneFrame = (props) => {
    return (
        <div className="text-center" style={{marginTop: 20}}>
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>Play Again</button>
        </div>
    );
}

export default DoneFrame;