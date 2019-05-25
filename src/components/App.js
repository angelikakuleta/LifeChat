import React from "react";
import "../styles/App.css";
import Menu from './Menu';
import MainView from "./mainView/mainView";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Shop from "./Shop/Shop";
import KeyWords from "./KeyWords/keyWords";


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
    return (
      <Router>
        <Menu />
        <Switch className='App'>
            <Route exact path='/' render={() => (
            this.state.isLogged ? (<Redirect to='/profile' />) : (<Login changeLoggedStatus={this.changeLoggedStatus} />)
            )} />
            <Route path="/profile" component={MainView} />
            <Route path="/logout" render={() => (
              <Logout changeLoggedStatus={this.changeLoggedStatus} />
            )} />
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
      </Router>
    )
  }
}
