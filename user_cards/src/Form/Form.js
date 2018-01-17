// eslint-disable-next-line
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import React, { Component } from 'react';
import './Form.scss';
// const axios = require('axios');

class Form extends React.Component {

    state = {
        username: ''
    }

    submit = (event) => {
        event.preventDefault();
        // console.log("event Submit", this.state.username);

        // fetch or axios  for fetching the data
        const axios = require('axios');
        // $ making interpolation lets put the username data into the request url
        axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(response => {
            //it recives a referance to onSubmit function (addNewCard) form App Component and passing the response to that method. addNewCard will now recive it as response
            this.props.onSubmit(response.data);
            //clean the input:
            this.setState({ username: ''});          
        })
        
    };
// ref is a special react method that reads from input
// <input ref={(input) => this.usernameInput = input} />
// but instead of using refs we place the username in state and then uses it as a value atribiute in input 
// we define onChange method for controling the state. That takes event and change te state by setState and match the event.target.value in this case the input value.

    render() {
        return (
            <form onSubmit={this.submit}>
               <input 
               value={this.state.username}
               onChange={(event) => this.setState({ username: event.target.value})}
               type="text" 
               placeholder="Username"       
               />
               <button type="submit">Add Card</button>
            </form>
        );
    };
};

export default Form