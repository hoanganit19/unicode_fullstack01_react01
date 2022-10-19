import React, { Component, createContext } from 'react'
import ComB from './ComB'

export const MyContext = createContext();

export class ComA extends Component {
  constructor(){
    super();
    this.state = {
        msg: 'Unicode Academy'
    }
  }  

  handleAdd = (data) => {
    console.log(data);
  }
  render() {
    return (
      <MyContext.Provider value={{
        data: this.state,
        dispatch: {
            handleAdd: this.handleAdd
        }
      }}>
        <ComB />
      </MyContext.Provider>
    )
  }
}

export default ComA

/*
Context API
- Context Object: React.createContext
- Provider => Gửi dữ liệu
- Consumer => Nhận dữ liệu
*/