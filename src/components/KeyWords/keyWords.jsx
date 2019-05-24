import React, { Component } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import "./keyWords.css";
import "../../styles/App.css";

export default class KeyWords extends Component {
  state = {
    keyWords: []
  };
  saveSkill = e => {
    e.preventDefault();
    if (this.state.keyWords.length === 5) {
      alert("Dodałeś już 5 zaklęc na ten tydzień!");
      return;
    }
    const input = document.querySelector(".keyWords__form-input");
    const newSkill = input.value;
    this.setState({ keyWords: [...this.state.keyWords, newSkill] });
    input.value = "";
  };

  renderKeyWords(el) {
    return (
      <li className="kewWords__skills__list-el" key={Math.random()}>
        {el}
      </li>
    );
  }
  render() {
    return (
      <section className="keyWords">
        <div className="kewWords__skills">
          <span className="kewWords__skills-header">
            Twoje zaklęcia na ten deszczowy dzień to:
          </span>
          <div className="kewWords__skills__list">
            {this.state.keyWords.map(this.renderKeyWords)}
          </div>
        </div>
        <Form className="keyWords__form" action="">
          <Input
            className="keyWords__form-input"
            placeholder="Wpisz zaklęcie"
          />
          <Button onClick={this.saveSkill}>Dodaj zaklęcie</Button>
        </Form>
      </section>
    );
  }
}
