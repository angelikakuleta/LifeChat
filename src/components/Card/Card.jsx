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
        <Avatar className="avatar" size={64} icon="user" />
        <div className="info">
          <p>{this.props.name}</p>
          <p>Data: {this.props.date}</p>
          {/* <p>Priorytet: {this.props.priority}</p>
          <p>Wiadomość: {this.props.message}</p> */}
        </div>
      </div>
      </Card>
    );
  }
}
