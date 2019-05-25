import React from "react";
import Card from "antd/lib/card";
import {Button} from "antd";
import "../../styles/App.css";
import "./Shop.css";

export const ShopWeapon = (props) =>  {

    
    return (
      <Card>
      <div className="btn-wrapper">
      <img src={props.src} alt="armor" style={{"width":"50%", "height":"50%"}} />
      </div>
            <p className="price">Cena :{props.price}</p>
             <div className="btn-wrapper">
             <Button onClick={props.handleClick}>Buy</Button>
         </div>
      </Card>
    );
  }