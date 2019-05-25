import React, { Component } from "react";
import Card from "antd/lib/card";
import { Avatar } from "antd";
import "./Card.css";
import "../../styles/App.css";
import ChatView from "../ChatView";
import avatar1 from "../../assets/avatars/pipo-enemy1.png";
import avatar2 from "../../assets/avatars/pipo-enemy2.png";
import avatar3 from "../../assets/avatars/pipo-enemy3.png";
import avatar4 from "../../assets/avatars/pipo-enemy4.png";
import avatar5 from "../../assets/avatars/pipo-enemy5.png";
import avatar6 from "../../assets/avatars/pipo-enemy6.png";
import avatar7 from "../../assets/avatars/pipo-enemy7.png";
import avatar8 from "../../assets/avatars/pipo-enemy8.png";
import avatar9 from "../../assets/avatars/pipo-enemy9.png";
import avatar10 from "../../assets/avatars/pipo-enemy10.png";
import avatar11 from "../../assets/avatars/pipo-enemy11.png";

const avatarArray = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11
];

export default class CardView extends Component {
  state = { renderChat: false };
  handleClick = () => {
    this.setState({ renderChat: true });
  };

  constructor(props) {
    super(props);
    this.state = {
      numberOfAvatar: ""
    };
  }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 11);
    const numberOfAvatar = avatarArray[randomNumber];
    this.setState({ numberOfAvatar: numberOfAvatar });
    console.log(this.state);
  }

  render() {
    let jsx;
    if (this.state.renderChat) {
      jsx = <ChatView />;
    } else {
      jsx = (
        <Card className="card" onClick={this.handleClick}>
          <div className="wrapper" style={{ color: "white" }}>
            <Avatar
              className="avatar"
              size={100}
              src={this.state.numberOfAvatar}
            />
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

    return jsx;
  }
}
