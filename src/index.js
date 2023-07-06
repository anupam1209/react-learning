import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode will only render the component twice in order to find a bug
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
