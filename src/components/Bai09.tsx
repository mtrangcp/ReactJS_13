import { Component } from "react";

type StateType = {
  userName: string;
};

export default class Bai09 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      userName: "Rikkei Academy",
    };
  }

  render() {
    const handleClickBtn = () => {
      this.setState({
        userName: "Rikkei Soft",
      });
    };

    return (
      <>
        <div>Ten cong ty: {this.state.userName}</div>
        <button onClick={handleClickBtn}>Change</button>
      </>
    );
  }
}
