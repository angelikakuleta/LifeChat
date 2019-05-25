import React from "react";
import {
   Link
} from "react-router-dom";

import './inBuild.css'

export default function InBuild () {
   return (
      <div className="inbuild-view">
         <h1 className="inbuild-info">Strona w budowie</h1>
         <Link to="/" className="back-to-main">
            Wróć do strony głownej
         </Link>
      </div>
   );
}
