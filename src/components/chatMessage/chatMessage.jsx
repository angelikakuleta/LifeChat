import React, { Fragment } from "react";
import reactStringReplace from "react-string-replace";
import "./chatMessage.css";

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.toBeRendered = this.props.message;
  }
  componentWillMount() {
    const keywordArr = this.props.keywords;
    for (let keyword of keywordArr) {
      this.toBeRendered = reactStringReplace(
        this.toBeRendered,
        keyword,
        (match, i) => (
          <span
            className="emphasis"
            onClick={this.addGold()}
            key={Math.random()}
          >
            {match}
          </span>
        )
      );
    }
  }
  async addGold() {
    console.log("Wysyłaj!");
    const token = localStorage.getItem("x-auth-token");
    const requestHeaders = {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token": token
    };
    const requestBody = {
      gold: 10
    };

    try {
      let response = await fetch(`/addGold`, {
        method: "post",
        headers: requestHeaders,
        body: JSON.stringify(requestBody)
      });
      if (response.status !== 200) throw response;
      console.log("poszło");
      response = await response.json();
      console.log(response);
    } catch (error) {
      return;
    }
  }

  render() {
    return (
      <Fragment>
        <p>
          <em className="empha">{this.props.user}: </em>
          {this.toBeRendered}
        </p>
      </Fragment>
    );
  }
}

export default ChatMessage;
