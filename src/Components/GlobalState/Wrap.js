import React, { Component } from 'react'
import Show from './Show';
import Add from './Add';

export class Wrap extends Component {
    constructor(){
        super();
        this.state = {
           lists: [
            {
                id: 1,
                name: 'Hoàng An'
            },

            {
                id: 2,
                name: 'Hoàng An 2'
            }
           ]
        }
    }

    handleAdd = (data) => {
        this.setState({
            lists: this.state.lists.concat(data)
        })
    }
  render() {
    return (
      <div>
        <Show value={this.state}/>
        <Add onReciveAdd={this.handleAdd}/>
      </div>
    )
  }
}

export default Wrap

/*
ComA => ComB => ComC
ComA => ComC
*/