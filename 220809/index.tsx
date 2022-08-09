import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
