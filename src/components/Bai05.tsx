import { Component } from "react";
import Children05 from "./Children05";

type StateType = {
  id: number;
  productName: string;
  price: number;
  quantity: number;
};

export default class Bai05 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      id: 1,
      productName: "Qua cam",
      price: 25000,
      quantity: 5,
    };
  }
  render() {
    const product = this.state;
    return (
      <div>
        <Children05
          id={product.id}
          productName={product.productName}
          price={product.price}
          quantity={product.quantity}
        ></Children05>
      </div>
    );
  }
}
