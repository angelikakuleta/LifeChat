import React, { Component } from "react";
import ChatMain from "./chatMain";
import ChatUserData from "./chatUserData";
import ChatKeyWords from "./chatKeyWords";
import "../styles/ChatView.css";
const io = require("socket.io-client");

const socket = io.connect("http://localhost:3001");

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      keywords: ["help", "money", "cash", "hack", "jfds"],
      name: this.props.location.name,
      message: this.props.location.message
    };

  }

  async componentDidMount() {
    // const name = localStorage.getItem("email");
    // console.log(name);
    // this.setState({ name: this.props.name });
    // console.log(this.props.location.name)
    console.log("montuje");
    const token = localStorage.getItem("x-auth-token");
    const requestHeaders = {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token
    };

    try {
      let response = await fetch(`/addKeyword`, {
        method: "get",
        headers: requestHeaders
      });
      if (response.status !== 200) throw response;
      console.log("przyszło");
      response = await response.json();
      this.setState({
        keyWords: response
      });
      this.setState({ keywords: response });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div id="chat-view">
        <ChatUserData
          name={this.state.name}
        />
        <ChatKeyWords keywords={this.state.keywords} />
        <ChatMain name={this.state.name} message={this.state.message} keywords={this.state.keywords} />
      </div>
    );
  }
}
