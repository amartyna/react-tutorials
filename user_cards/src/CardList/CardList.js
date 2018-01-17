 // eslint-disable-next-line
 import ReactDOM from 'react-dom';
 // eslint-disable-next-line
import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.scss';

class CardList extends React.Component {

//CardList takes props as cards passed in App Component then mapping through them renders a Card Component with SPREAD operator ...card

	render() {
  	return (
      //provide unique key such as for example the id picked from users data github api
      <div>
        {this.props.cards.map(card => <Card key={card.id} {...card}/>)}
     </div>
    );
  };
};

export default CardList