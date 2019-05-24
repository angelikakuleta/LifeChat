import React, { Component } from "react";
import CardView from "../Card/Card";
import "./mainView.css";
import "../../styles/App.css";
import io from "socket.io";

const socket = io.connnect("http://localhost:3000");

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
  componentDidMount() {}

  createNewCard = el => {
    return (
      <li className="mainView__cardList-el" key={Math.random()}>
        <CardView
          name={el.name}
          date={el.date}
          priority={el.priority}
          message={el.message}
        />
      </li>
    );
  };
  componentDidUpdate() {}
  render() {
    return (
      <section className="mainView">
        <div className="mainView__menu">Tutaj będzie menu</div>

        <ul className="mainView__cardList">
          {this.state.quests ? this.state.quests.map(this.createNewCard) : null}
        </ul>
      </section>
    );
  }
}
