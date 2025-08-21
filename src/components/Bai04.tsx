import { Component } from "react";
import Children04 from "./Children04";

type StateType = {
  name: string;
};

export default class Bai04 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: "Nguyen Van A",
    };
  }
  render() {
    return (
      <div>
        <h3>Ho va ten components cha:{this.state.name}</h3>
        <Children04 name={this.state.name}></Children04>
      </div>
    );
  }
}
