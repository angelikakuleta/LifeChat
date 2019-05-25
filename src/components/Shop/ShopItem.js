import React from "react";
import Card from "antd/lib/card";
import {Button} from "antd";
import "../../styles/App.css";
import "./Shop.css";

export const ShopItem = (props) =>  {

    
    return (
      <Card title={props.name}>
        <p className="price">Cena: {props.price}</p>
        <div className="btn-wrapper">
         <Button onClick={props.handleClick}>Buy</Button>
        </div>
      </Card>
    );
  }