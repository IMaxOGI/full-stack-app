import createStore from "./redux/createStore";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./Routes";

const store = createStore();

export default function ReduxTolkit() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
