import React, { Component } from "react";

import { withContext } from "./StateProvider/withContext";

export class DemoContext extends Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    const { store } = this.props;
    store.dispatch.handleAdd("ok");
  };
  render() {
    const { store } = this.props;

    return (
      <div>
        <h1>{store.data.msg}</h1>
        <button onClick={this.handleAdd}>Button</button>
      </div>
    );
  }
}

export default withContext(DemoContext);
