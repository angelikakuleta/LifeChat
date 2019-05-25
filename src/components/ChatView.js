import React, { Component } from "react";
import ChatMain from "./chatMain";
import ChatUserData from "./chatUserData";
import ChatKeyWords from "./chatKeyWords";
import "../styles/ChatView.css";

export default class ChatView extends Component {
  state = {
    keywords: ["help", "money", "cash", "hack", "jfds"],
    name: "Śmiertelnik_numer_666"
  };
  async componentDidMount() {
    const name = localStorage.getItem("email");
    console.log(name);
    this.setState({ name: name });
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
          // email={this.state.name + "@mycompany.com"}
        />
        <ChatKeyWords keywords={this.state.keywords} />
        <ChatMain keywords={this.state.keywords} />
      </div>
    );
  }
}
