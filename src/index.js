import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Main from "./Main";
import StateProvider from "./Components/StateProvider/StateProvider";

const root = ReactDOM.createRoot(document.querySelector(".main-content"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <Main />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
