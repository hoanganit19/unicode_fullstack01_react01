import React, { Component } from "react";
import {v4 as uniqueId} from 'uuid';

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAdd = () => {
    const {name} = this.state;
    const {onReciveAdd} = this.props;
    const item = {
        id: uniqueId(),
        name: name
    }

    onReciveAdd(item);

    this.setState({
        name: ''
    })
    
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Tên..."
          onChange={this.handleChangeValue}
          value={name}
        />
        <button onClick={this.handleAdd}>Button</button>
      </div>
    );
  }
}

export default Add;
