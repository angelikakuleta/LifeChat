import React, { Component } from "react";
import Card from "antd/lib/card";
import "./Card.css";
import "../../styles/App.css";

export default class CardView extends Component {
  state = {};
  render() {
    return (
      <Card title={this.props.name}>
        <p>Data: {this.props.date}</p>
        <p>Priorytet: {this.props.priority}</p>
        <p>Wiadomość: {this.props.message}</p>
      </Card>
    );
  }
}
