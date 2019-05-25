import React, { Component } from "react";
import CardView from "../Card/Card";
import "./mainView.css";
import "../../styles/App.css";
import ChatView from "../ChatView";
import { Link } from "react-router-dom";

const io = require("socket.io-client");

const socket = io.connect("http://localhost:3001");

export default class MainView extends Component {
  state = {
    quests: [
      {
        name: "Tomek",
        message: "Nie mam się z kim napić",
        priority: "Wysoki",
        date: "15.10.3016 15:22:15"
      },
      {
        name: "Tomek",
        message: "Nie mam się z kim napić",
        priority: "Wysoki",
        date: "15.10.3016 15:22:15"
      }
    ]
  };
  componentDidUpdate() {
    socket.on("chat", function(data) {
      this.setState({ quests: [...this.state.quests, data] });
    });
  }

  openChat = () => {
    console.log("otwieram chat");
    return <ChatView />;
  };

  createNewCard = el => {
    console.log(el);
    return (
      <li className="mainView__cardList-el" key={Math.random()}>
        <Link to="/chat">
          <CardView
            name={el.name}
            date={el.date}
            priority={el.priority}
            message={el.message}
          />
        </Link>
      </li>
    );
  };

  render() {
    return (
      <section className="mainView">
        <ul className="mainView__cardList">
          {this.state.quests ? this.state.quests.map(this.createNewCard) : null}
        </ul>
      </section>
    );
  }
}
