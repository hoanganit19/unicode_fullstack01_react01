import React, { Component } from "react";
import Content from "./Content";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <Content count={0}/> 
        <button type="button" onClick={this.handleIncrement}>
          Up
        </button>
      </div>
    );
  }
}

export default Counter;
