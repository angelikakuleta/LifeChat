import React, { Component } from "react";
import CardView from "../Card/Card";
import "./mainView.css";
import "../../styles/App.css";
import ChatView from "../ChatView";
import { Link } from "react-router-dom";

const io = require("socket.io-client");

const socket = io.connect("http://localhost:3001");

export default class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handlers: [],
      quests: [
        // {
        //   name: "Tomek",
        //   message: "Nie mam się z kim napić",
        //   priority: "Wysoki",
        //   date: "15.10.3016 15:22:15"
        // },
        // {
        //   name: "Tomek",
        //   message: "Nie mam się z kim napić",
        //   priority: "Wysoki",
        //   date: "15.10.3016 15:22:15"
        // }

      ]
    };

    setTimeout(this.refresh, 1000)
  }

  refresh = () => {
    socket.on("chat", ({ handle, message }) => {

      if (this.state.handlers.includes(handle)) {
        return;
      } else {
        this.setState({ handlers: [...this.state.quests, handle], quests: [...this.state.quests, { name: handle, message: message }] });
      }
    })
  }

  openChat = () => {
    console.log("otwieram chat");
    return <ChatView />;
  };

  createNewCard = el => {
    console.log(el);
    return (
      <li className="mainView__cardList-el" key={Math.random()}>
        <Link to={{
          pathname: "/chat",
          name: el.name,
          message: el.message
        }}
        >
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
