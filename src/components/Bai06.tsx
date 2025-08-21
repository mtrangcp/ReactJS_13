import { Component } from "react";
import Children06 from "./Children06";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type StateType = {
  listPost: Post[];
};

export default class Bai06 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      listPost: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content:
            "Props giúp truyền dữ liệu từ component con xuống component cha",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Danh sach bai viet</h2>
        <Children06 listPost={this.state.listPost}></Children06>
      </div>
    );
  }
}
