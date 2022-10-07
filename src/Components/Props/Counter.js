import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();

    //khởi tạo giá trị ban đầu của state
    this.state = {
        count: 0
    }
  }

  handleIncrement = () => {
    this.setState({
        count: this.state.count+1
    })
  }

  handleDecrement = () => {
    this.setState({
        count: this.state.count-1
    })
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button type="button" onClick={this.handleDecrement}>-</button>
        <button type="button" onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
