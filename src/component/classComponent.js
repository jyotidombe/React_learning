import React, { Component } from 'react';

export default class Greeting extends Component {
    state = {
        name: 'Anuja',
        age: 42,
    };
    
    handleAgeChange = () => {
        this.setState({
          age: this.state.age + 1 
        });
    };

    handleNameChange = (e) => {
      this.setState({
        name: e.target.value
      });
  };
  render() {
    return (
        <>
        <p>Hello, {this.props.name}! This is class component</p>
        <input value={this.state.name} onChange={this.handleNameChange}/>
        <button onClick={this.handleAgeChange}>
        Increment age
        </button>
        <p>You are {this.state.age}.</p>
        </>
    )
    
  }
}