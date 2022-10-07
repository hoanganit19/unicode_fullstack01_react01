import React, { Component } from "react";

export class VndToUsd extends Component {
  constructor(props) {
    super(props);
  }

  convertVndToUsd = (e) => {
    let vnd = e.target.value;

    let usd = vnd / 23500;

    usd = usd.toFixed(2);

    this.props.onDataUsd(usd, vnd);
  };

  render() {
    return (
      <div>
        <label>VND: </label>
        <input
          type="text"
          value={this.props.vnd}
          onChange={this.convertVndToUsd}
        />
      </div>
    );
  }
}

export default VndToUsd;
