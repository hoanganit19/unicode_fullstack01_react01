import React, { Component } from 'react'

export class Show extends Component {
    constructor(props){
        super(props);

    }
  render() {
    const {lists} = this.props.value;
    
    return (
      <div>
        {
            lists.map(({id, name})=> <p key={id}>{name}</p>)
        }
      </div>
    )
  }
}

export default Show