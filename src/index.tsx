import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { themes } from "./core/styles/themes";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
