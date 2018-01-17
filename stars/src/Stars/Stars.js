// eslint-disable-next-line
import React, { Component } from 'react';
import './Stars.scss';

const Stars = (props) => {

    //make stars render proper amout of stars from a variable
    // to render random numbers of stars use math.random + 1 to avoid 0 and floor
    const numberOfStars = 1 + Math.floor(Math.random()*9); 

    let stars = [];
    // to render stars we need to iterate through numberOfStars and add a star with every iteration, we can do that by using for loop and push to <i> element a starr

    for (let i=0; i<numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>)
    }



    return (
        <div className="col-5">
            {stars}
        </div>
    );
}
    


export default Stars;
