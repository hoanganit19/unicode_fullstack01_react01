import React, { Component } from "react";
export const Color = (ParentComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    getColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
      return (
        <div style={{background: this.getColor()}}>
          <ParentComponent {...this.props}/>
        </div>
      );
    }
  };
};

/*
Higher Order Component
- Nhận vào 1 component

=> Xử lý logic trước khi return

- Return về chính Component đó
*/
