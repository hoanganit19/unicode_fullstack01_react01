import React, { Component } from "react";
import UsdToVnd from "./UsdToVnd";
import VndToUsd from "./VndToUsd";

export class CurrencyConvert extends Component {
  constructor() {
    super();
    this.state = {
      vnd: 0,
      usd: 0,
    };
  }

  handleDataVnd = (vnd, usd) => {
    this.setState({
      vnd: vnd,
      usd: usd,
    });
    
  };

  handleDataUsd = (usd, vnd) => {
    this.setState({
      vnd: vnd,
      usd: usd,
    });
  };

  render() {
    return (
      <div>
        <UsdToVnd onDataVnd={this.handleDataVnd} usd={this.state.usd} />
        <VndToUsd onDataUsd={this.handleDataUsd} vnd={this.state.vnd} />
      </div>
    );
  }
}

export default CurrencyConvert;
