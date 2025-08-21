import { Component } from "react";

type StateType = {
  id: number;
  name: string;
  dateOfBirth: string;
  address: string;
};

export default class Bai02 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      id: 1,
      name: "Nguyen Van A",
      dateOfBirth: "12/12/2015",
      address: "Thanh Xuan, Ha Noi",
    };
  }
  render() {
    return (
      <div>
        <h2>Thong tin ca nhan</h2>
        <div>id: {this.state.id}</div>
        <div>Ten: {this.state.name}</div>
        <div>Ngay sinh: {this.state.dateOfBirth}</div>
        <div>Dia chi: {this.state.address}</div>
      </div>
    );
  }
}
