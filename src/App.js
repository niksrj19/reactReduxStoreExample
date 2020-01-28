import React from "react";

import Login from "./component/Login";
import store from "./component/reduxstore/ReduxStore";
import { Provider } from "react-redux";
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}
