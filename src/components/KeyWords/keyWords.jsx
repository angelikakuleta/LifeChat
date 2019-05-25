import React, { Component } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import List from "antd/lib/list";
import Typography from "antd/lib/typography";
import "./keyWords.css";
import "../../styles/App.css";

export default class KeyWords extends Component {
  state = {
    keyWords: [],
    newKeyWord: "",
    inputValue: ""
  };

  async componentDidMount() {
    const token = localStorage.getItem("x-auth-token");
    const requestHeaders = {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token
    };
    try {
      let response = await fetch(`/keywords`, {
        method: "get",
        headers: requestHeaders
      });
      if (response.status !== 200) throw response;
      response = await response.json();
      this.setState({ keyWords: response.keyWords });
    } catch (error) {
      return;
    }
  }
  saveSkill = e => {
    e.preventDefault();
    if (this.state.keyWords.length === 5) {
      alert("Dodałeś już 5 zaklęc na ten dzień!");
      return;
    }
    const input = document.querySelector(".keyWords__form-input");
    const newSkill = input.value;
    this.setState({ keyWords: [...this.state.keyWords, newSkill] });
    this.setState({});
    input.value = "";
  };

  async sendKeyWords(e) {
    e.preventDefault();
    if (this.state.keyWords.length === 5) {
      alert("Dodałeś już 5 zaklęc na ten dzień!");
      return;
    }
    const input = document.querySelector(".keyWords__form-input");
    const token = localStorage.getItem("x-auth-token");
    const requestHeaders = {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token
    };
    const requestBody = {
      keyWords: this.state.newKeyWord
    };

    try {
      let response = await fetch(`/keywords`, {
        method: "post",
        headers: requestHeaders,
        body: JSON.stringify(requestBody)
      });
      if (response.status !== 200) throw response;
      response = await response.json();
      const newSkill = this.state.newKeyWord;
      this.setState({ keyWords: [...this.state.keyWords, newSkill] });
      input.value = "";
    } catch (error) {
      return;
    }
  }

  renderKeyWords(el) {
    return (
      <li className="kewWords__skills__list-el" key={Math.random()}>
        <i class="fas fa-magic" /> {el}
      </li>
    );
  }
  render() {
    return (
      <section className="keyWords">
        <div className="keyWords-desc" />
        <div className="keyWords__skills">
          <div className="keyWords__skills__list">
            <List
              header={
                <div className="keyWords__skills__list-header">
                  Twoje zaklęcia na ten deszczowy dzień to:
                </div>
              }
            >
              {this.state.keyWords.map(this.renderKeyWords)}
            </List>
          </div>
        </div>
        <form className="keyWords__form" action="">
          <input
            className="keyWords__form-input"
            placeholder="Wpisz zaklęcie"
          />
          <button className="keyWords__form-button" onClick={this.saveSkill}>
            Dodaj zaklęcie
          </button>
        </form>
      </section>
    );
  }
}
