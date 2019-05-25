import React from "react";
import "../styles/App.css";
import MainView from "./mainView/mainView";
import Shop from "./Shop/Shop";
import Menu from "./Menu";
import KeyWords from "./KeyWords/keyWords";

import Login from "./Login/Login";
// import Register from './Register/Register';

function App() {
  return (
    <div>
      <Menu />
      <MainView />
      <KeyWords />
      <Login />
    <Shop />
    </div>
  );
}

export default App;
