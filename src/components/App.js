import React from "react";
import "../styles/App.css";
import MainView from "./mainView/mainView";
import Menu from "./Menu";
import Login from "./Login";
import Register from "./Register";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Routes = (
  <Switch className="App">
    <Route path="/" exact component={Login} />
    <Route path="/profile" component={MainView} />
    {/* <Route path='/shop' component={MainView} />
    <Route path="/leaderboard" component={Login} />
    <Route path="/howTo" component={Register} />
    <Route path="/keywords" component={Logout} />
    <Route exact path="/settings" component={SplashScreen} />
    <Route path="/logout" component={InBuild} />
    <Route path="/login" component={InBuild} />
    <Route path="/register" component={InBuild} />
    <Route path="/contact" component={InBuild} />  */}
    {/* <Route component={Error} /> */}
  </Switch>
);

function App() {
  return (
    <Router>{Routes}</Router>
  )
}

export default App;
