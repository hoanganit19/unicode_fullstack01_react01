import React, { Component } from 'react'
import { MyContext } from './ComA'

export class ComC extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
            (context) => {
                //console.log(context);
                return (<div>ComC</div>)
            }
        }
      </MyContext.Consumer>
    )
  }
}

export default ComC