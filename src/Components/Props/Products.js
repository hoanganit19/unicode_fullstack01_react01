import React, { Component } from "react";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      price: this.props.price,
    };

    //this.name = 'Hoàng An';
  }

  handleClickBtn = () => {
    // this.setState({
    //     name: 'Sản phẩm 2',
    //     price: 13000
    // });
    // console.log(this.state);
    this.setState((prevState) => (prevState.name = "Sản phẩm 2"));
  };

  render() {
    console.log("re-render");
    const { name, price } = this.state;

    // const handleClickBtn = () => {
    //     console.log('click...')
    // }

    return (
      <div>
        <h1>Products</h1>
        <h3>Name: {name}</h3>
        <h3>Name: {price}</h3>
        <button onClick={this.handleClickBtn}>Click me</button>
      </div>
    );
  }
}

export default Products;
