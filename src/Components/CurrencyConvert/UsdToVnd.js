import React, { Component } from "react";

export class UsdToVnd extends Component {
  constructor(props) {
    super(props);
  }

  convertUsdToVnd = (e) => {
    let usd = e.target.value;

    let vnd = usd * 23500;

    this.props.onDataVnd(vnd, usd);
  };

  render() {
    return (
      <div>
        <label>USD: </label>
        <input
          type="text"
          value={this.props.usd}
          onChange={this.convertUsdToVnd}
        />
      </div>
    );
  }
}

export default UsdToVnd;
