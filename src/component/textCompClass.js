import React, { Component } from 'react'

export default class TextCompClass extends Component {
  state = {
    text: 'jyoti',
    age: 42,
  };

  increment = () => {
    this.setState({
      age : this.state.age + 1 // Updater function
    })  
  }

  /*conUpperCase = () => {
    this.setState({   // this.setState - Safe for single updates, Use when not relying on previous state
      text: this.state.text.toUpperCase()
    });
  }; */

  conUpperCase = () => {
    this.setState(prevState => ({  //prevState - recommended when your new state depends on the previous state
      text: prevState.text.toUpperCase()
    }));
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };
  render() {
    return (
        <>
        <div>
            <h3>Your age: {this.state.age}</h3>
            <button className="btn btn-sm btn-success" onClick={this.increment}>+1</button>
            <p>{this.props.heading}</p>
            <div className="mb-3">
                <textarea type="address" className="form-control" id="myAdd" rows='6' value={this.state.text} onChange={this.handleChange}  />
            </div>
            <button className="btn btn-primary" onClick={this.conUpperCase}>Convert to Uppercase</button>
        </div>
        </>
    )
  }
}
