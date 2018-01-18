// eslint-disable-next-line
import React, { Component } from 'react';
import './Numbers.scss';
const _ = require('lodash');

const Numbers = (props) => {
    // instead of looping through array we can use range method with loadash
    
    // const arrayOfNubers = _.range(1,10);

    const numberClass = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected'
        } 
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used'
        } 
    }

    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => 
                <span 
                    className={numberClass(number)} 
                    key={i}
                    onClick={() => props.pickNumber(number)}>
                        {number}
                </span>
                )}
            </div>
        </div>
    );
}

// instead of using const variable we can place the numbers into the object prototype like:

Numbers.list = _.range(1, 10);

export default Numbers;