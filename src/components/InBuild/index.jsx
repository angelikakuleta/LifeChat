import React from "react";
import {
   Link
} from "react-router-dom";

export default function InBuild () {
   return (
      <div>
         <h1>Strona w budowie</h1>
         <Link to="/" >
            Wróć do strony głownej
         </Link>
      </div>
   );
}
