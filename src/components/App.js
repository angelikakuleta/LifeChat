import React from "react";
import "../styles/App.css";
import MainView from "./mainView/mainView";
import Shop from "./Shop/Shop";
import Menu from "./Menu";

function App() {
  return (
    <div>
    <Menu />
    {/* <MainView />; */}
    <Shop />
    </div>
  )
}

export default App;
