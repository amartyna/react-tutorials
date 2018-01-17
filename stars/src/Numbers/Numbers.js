// eslint-disable-next-line
import React, { Component } from 'react';
import './Numbers.scss';

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                <span>1</span>
                <span className="selected">2</span>
                <span className="used">3</span>
            </div>
        </div>
    );
}



export default Numbers;