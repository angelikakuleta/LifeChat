import React from "react";
import "../styles/App.css";
import MainView from "./mainView/mainView";
import Menu from "./Menu";
import KeyWords from "./KeyWords/keyWords";

function App() {
  return (
    <div>
      <KeyWords />
      {/* <Menu />;
    <MainView />; */}
    </div>
  );
}

export default App;
