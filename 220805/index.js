import React from "react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import "./index.css";

//them의 이름은 다르게 하고 안의 property 이름은 똑같이 가져야 하는데
// 이유는 darkThem -> lightTem 으로 이름만 바꿔주면 색이 바뀌기 때문임
const darkThem = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightThem = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkThem}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
