import React, { Component } from "react";

export const StateContext = React.createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        msg: 'Unicode'
    }
    this.dispatch = {
        handleAdd: this.handleAdd
    }
  }

  handleAdd = (data) => {
    console.log(data);
  }

  render() {
    const { children } = this.props;
    return <StateContext.Provider value={
        {
            data: this.state,
            dispatch: this.dispatch
        }
    }>{children}</StateContext.Provider>;
  }
}

export default StateProvider;
