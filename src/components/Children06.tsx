import { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type PropsType = {
  listPost: Post[];
};

export default class Children06 extends Component<PropsType> {
  render() {
    return (
      <>
        {this.props.listPost.map((el) => {
          return (
            <div>
              <div>Id: {el.id}</div>
              <div>Title: {el.title}</div>
              <div>Content: {el.content}</div>
              <div>Author: {el.author}</div>
              <hr />
            </div>
          );
        })}
      </>
    );
  }
}
