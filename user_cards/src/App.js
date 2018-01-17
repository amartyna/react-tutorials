 // eslint-disable-next-line
import React, { Component } from 'react';
import CardList from './CardList/CardList';
import Form from './Form/Form';
import './index.scss';


// App takes the cardsData and sends is as a prop called cards to CardList Component

class App extends React.Component {

  state = {
    cardsData: [
      {
        name: "Batman",
        avatar_url: "http://cdn-static.denofgeek.com/sites/denofgeek/files/images/325224.jpg",
        company: "Wayne Enterprises",
        id: "1"
      },
      {
        name: "Riddler",
        avatar_url: "https://vignette.wikia.nocookie.net/batman/images/8/89/Batman_Forever_-_The_Riddler_8.jpg/revision/latest/scale-to-width-down/250?cb=20140826141000",
        company: "Villain",
        id: "2"
      },
    ]
  }

  addNewCard = (response) => {
    //taking the response.data from Form onSubmit method
    // console.log(response);

    this.setState(prevState => ({
      // take the response and append it to the states cardsData array
      cardsData: prevState.cardsData.concat(response)
    }));
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cardsData} />
      </div>
    );
  };
};

  export default App;




	// state = { counter: 0 };
  
  // incrementCounter = (incrementValue) => {
  // 	this.setState((prevState) => ({
  //     counter: prevState.counter + incrementValue
  //   }));
  // };

// 	render() {
//   	return (
//     	<div>
//       	<Button 
//         incrementValue={1} 
//         onClickFunction={this.incrementCounter}/>
//         <Button 
//         incrementValue={5} 
//         onClickFunction={this.incrementCounter}/>
//         <Button 
//         incrementValue={10} 
//         onClickFunction={this.incrementCounter}/>
//         <Button 
//         incrementValue={100} 
//         onClickFunction={this.incrementCounter}/>
//         <Result counterValue={this.state.counter}/>
//       </div>
//     );
//   }
// }


