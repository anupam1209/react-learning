import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode will only render the component twice in order to find a bug
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
