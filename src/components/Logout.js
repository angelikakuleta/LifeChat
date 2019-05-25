import React from "react";
import {
   Link
} from "react-router-dom";

export default class Logout extends React.Component {

   componentDidMount() {
      localStorage.removeItem("x-auth-token");
      this.props.changeLoggedStatus(false);
   }

   render() {
      return (
         <div>
            <h1>Pomyślnie wylogowano</h1>
            <Link to="/" >
               Wróć do strony głownej
            </Link> 
         </div>
      );
   }
}