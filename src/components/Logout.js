import React from "react";
import {
   Link
} from "react-router-dom";

import '../styles/Logout.css'

export default class Logout extends React.Component {

   componentDidMount() {
      localStorage.removeItem("x-auth-token");
      this.props.changeLoggedStatus(false);
   }

   render() {
      return (
         <div className="logout-view">
            <h1 className="logout-info">Pomyślnie wylogowano</h1>
            <Link to="/" className="back-to-main">
               Wróć do strony głównej
            </Link> 
         </div>
      );
   }
}