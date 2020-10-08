import React from "react";
import ReactDOM from "react-dom";
import { initializeStore } from "./store";
import { Provider } from "react-redux";
import App from "./App";

const store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
