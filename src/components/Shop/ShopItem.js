import React from "react";
import Card from "antd/lib/card";
import {Button} from "antd";
import "../../styles/App.css";

export const ShopItem = (props) =>  {

    
    return (
      <Card title={props.name}>
        <img src ={props.img} alt={props.name}></img>
        <p>Cena: {props.price}</p>
        <Button onClick={props.handleClick}>Buy</Button>
      </Card>
    );
  }