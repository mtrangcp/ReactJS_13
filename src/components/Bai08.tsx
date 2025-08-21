import { Component } from "react";
import "../styles/Bai08.css";

type Todo = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type StateType = {
  listPost: Todo[];
};

function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  const HH = String(date.getHours()).padStart(2, "0");
  const MM = String(date.getMinutes()).padStart(2, "0");
  const SS = String(date.getSeconds()).padStart(2, "0");

  return `${dd}/${mm}/${yyyy} ${HH}:${MM}:${SS}`;
}

export default class Bai08 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      listPost: [
        {
          id: 1,
          name: "Thiet ke giao dien Header",
          assign: "Nguyen Van A",
          status: false,
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Thiet ke giao dien Footer",
          assign: "Nguyen Van B",
          status: true,
          created_at: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <table>
        <tr>
          <th>STT</th>
          <th>Ten cong viec</th>
          <th>Nguoi thuc hien</th>
          <th>Trang thai</th>
          <th>Thoi gian tao</th>
          <th>Chuc nang</th>
        </tr>
        <tbody>
          {this.state.listPost.map((el) => {
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.assign}</td>
                <td>
                  <span className={el.status ? "completed" : "uncompleted"}>
                    {el.status ? "Hoan thanh" : "Chua hoan thanh"}
                  </span>
                </td>
                <td>{formatDate(el.created_at)}</td>
                <td>
                  <button className="btn-edit">Sua</button>
                  <button className="btn-del">Xoa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
