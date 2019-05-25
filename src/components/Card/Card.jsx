import React, { Component } from "react";
import Card from "antd/lib/card";
import { Avatar } from "antd";
import "./Card.css";
import "../../styles/App.css";
import ChatView from '../ChatView';
import avatar1 from "../../assets/avatars/pipo-enemy1.png";

export default class CardView extends Component {
  state = { renderChat: false };
  handleClick = () => {
    this.setState({ renderChat: true })
  }

  render() {
    let jsx;
    if (this.state.renderChat) {
      jsx = <ChatView />
    } else {
      jsx = <Card className="card" onClick={this.handleClick}>
        <div className="wrapper">
          <Avatar className="avatar" size={100} src={avatar1} />
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
    }

    return (
      jsx
    );
  }
}
