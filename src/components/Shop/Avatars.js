import React from 'react';
import "antd/dist/antd.css";
import avatar1 from "../../assets/avatars/pipo-enemy1.png";
import avatar2 from "../../assets/avatars/pipo-enemy1.png";
import avatar3 from "../../assets/avatars/pipo-enemy1.png";
import avatar4 from "../../assets/avatars/pipo-enemy1.png";
import avatar5 from "../../assets/avatars/pipo-enemy1.png";
import Card from "antd/lib/card";
import "./Shop.css";
import {Button} from "antd";
import { Avatar } from 'antd';


const Avatars = (props) => {

        return (
            <Card title={props.name}>
            <img src={avatar1} alt="buy_avatars" style={{"width":"50%", "height":"50%"}} /> 
            <Button onClick={props.handleClick}>See more</Button>
         </Card>
        )
    }

export default Avatars;
  