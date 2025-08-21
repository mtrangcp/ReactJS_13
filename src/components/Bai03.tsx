import { Component } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

type StateType = {
  listUser: User[];
};

export default class Bai03 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, name: "Jonh", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Jane", age: 20 },
      ],
    };
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {this.state.listUser.map((el) => {
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.age}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
