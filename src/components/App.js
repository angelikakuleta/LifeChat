import React from "react";
import "../styles/App.css";
import MainView from "./mainView/mainView";
import Menu from "./Menu";

function App() {
  return (
    <div>
    <Menu />;
    <MainView />;
    </div>
  )
}

export default App;
