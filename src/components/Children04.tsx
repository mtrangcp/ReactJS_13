import { Component } from "react";

type PropsType = {
  name: string;
};

export default class Children04 extends Component<PropsType> {
  render() {
    return <div>Ho va ten components con: {this.props.name}</div>;
  }
}
