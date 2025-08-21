import { Component } from "react";
import "../styles/Bai07.css";

type StateType = {
  theme: string;
  language: string;
};

export default class Bai07 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      theme: "dark",
      language: "vietnamese",
    };
  }
  render() {
    const status = this.state;
    const value = status.theme === "light" ? "light" : "dark";

    return (
      <body className={value}>
        <h3>Nền: {status.theme === "light" ? "Sáng" : "Tối"}</h3>
        <h3>
          Ngôn ngữ: {status.language === "english" ? "Tiếng Anh" : "Tiếng Việt"}
        </h3>
      </body>
    );
  }
}
