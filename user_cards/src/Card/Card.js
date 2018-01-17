 // eslint-disable-next-line
 import ReactDOM from 'react-dom';
 // eslint-disable-next-line
import React, { Component } from 'react';
import './Card.scss';


// Card component written as a function takes props to display data from CardList COmponent

const Card = (props) => {
    return (
        <div className="card" >
            <img width="150" src={props.avatar_url} alt="avavtar" />
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="company-name">{props.company}</div>               
                <div className="location">{props.location}</div>               
            </div>
        </div>
    );
}

export default Card