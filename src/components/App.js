import React from "react";
import "../styles/App.css";
import Menu from './Menu';
import MainView from "./mainView";
import ChatView from "./ChatView";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Shop from "./Shop/Shop";
import KeyWords from "./KeyWords/keyWords";
import InBuild from "./InBuild";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default class App extends React.Component {
  state = {
    isLogged: false
  }

  componentDidMount() {
    const token = localStorage.getItem("x-auth-token");
    if (token) {
      this.setState({
        isLogged: true
      });
    }
  }

  changeLoggedStatus = (logged) => {
    if(logged) {
      this.setState({
        isLogged: true
      });
    } else {
      this.setState({
        isLogged: false
      });
    }
  }

  render() {
    const theme = localStorage.getItem("theme");
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    return (
      <Router> 
        {this.state.isLogged && <Menu />}
        <Switch className='App'>
            <Route exact path='/' render={() => (
            this.state.isLogged ? (<Redirect to='/dashboard' />) : (<Login changeLoggedStatus={this.changeLoggedStatus} />)
            )} />
            <Route path="/login" render={() => (
            this.state.isLogged ? (<Redirect to='/dashboard' />) : (<Login changeLoggedStatus={this.changeLoggedStatus} />)
            )} />
            <Route path="/register" render={() => (
            this.state.isLogged ? (<Redirect to='/dashboard' />) : (<Register />)
            )} /> 
            <Route path="/logout" render={() => (
              <Logout changeLoggedStatus={this.changeLoggedStatus} />
            )} />
            <Route path="/dashboard" component={MainView} />
            <Route path='/shop' component={Shop} />
            <Route path="/keywords" component={KeyWords} />
            <Route path="/chat" component={ChatView} />
       
            <Route path="/profile" component={InBuild} />
            <Route path="/leaderboard" component={InBuild} />
            <Route path="/howTo" component={InBuild} />        
            <Route exact path="/settings" component={InBuild} />
            <Route path="/contact" component={InBuild} />

            {/* <Route component={Error} /> */}           
          </Switch>
      </Router>
    )
  }
}
