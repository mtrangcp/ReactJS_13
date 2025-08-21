import { Component } from "react";

type PropsType = {
  id: number;
  productName: string;
  price: number;
  quantity: number;
};

export default class Children05 extends Component<PropsType> {
  render() {
    return (
      <div>
        Du lieu trong components con:
        <div>Id: {this.props.id}</div>
        <div>Product name: {this.props.productName}</div>
        <div>Price: {this.props.price}</div>
        <div>Quantity: {this.props.quantity}</div>
      </div>
    );
  }
}
