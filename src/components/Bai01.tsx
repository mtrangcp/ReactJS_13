import { Component } from "react";

type StateType = {
  name: string;
};

export default class Bai01 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: "Nguyen Van A",
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
