 // eslint-disable-next-line
import ReactDOM from 'react-dom';
 // eslint-disable-next-line
import React, { Component } from 'react';
import './Button.scss';

class Button extends React.Component {
	handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue)
  }

	render() {
  	return (
    	<button onClick={this.handleClick} className="button">
     	 +{this.props.incrementValue}
      </button>
    );
  };
};

export default Button