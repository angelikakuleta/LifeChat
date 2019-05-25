import React, { Component } from "react";
import Card from "antd/lib/card";
import { Avatar } from 'antd';
import "./Card.css";
import "../../styles/App.css";

export default class CardView extends Component {
  state = {};
  render() {
    return (
      <Card className="card">
      <div className="wrapper">
        <Avatar className="avatar" size={100} icon="user" />
          <div className="info">
            <div className="data">
              <p className="name">{this.props.name}</p>
              <p>{this.props.date}</p>
            </div>
            {/* <p>Priorytet: {this.props.priority}</p> */}
            <p>{this.props.message}</p>          
          </div>          
      </div>
      </Card>
    );
  }
}
