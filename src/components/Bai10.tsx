import React, { Component } from "react";
import "../styles/Bai08.css";

type StateType = {
  content: string;
};

export default class Bai10 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {
    const handleChangInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        content: event.target.value,
      });
    };
    return (
      <>
        Du lieu: <span>{this.state.content}</span> <br />
        <input type="text" onChange={handleChangInput} />
      </>
    );
  }
}
