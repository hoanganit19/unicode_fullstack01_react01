import React, { Component } from 'react'
import ComC from './ComC'
import { MyContext } from './ComA'

export class ComB extends Component {
  handleAdd = (context) => {
    context.dispatch.handleAdd('ok');
  }  
  render() {
    return (
      <MyContext.Consumer>
        {
            (context) => {
                //console.log(context);
                
                return <>
                <ComC />
                <button type='button' onClick={() => {
                    this.handleAdd(context)
                }}>Add</button>
                </>
            }
        }
      </MyContext.Consumer>
    )
  }
}

export default ComB