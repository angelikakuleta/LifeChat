import React from "react";
import "../../styles/form.css";
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    errors: {},
    isDisable: true
  };

  handleChangeName = e => {
    let error = "";
    let isDisable = true;

    if (e.target.value.length === 0) error = "To pole jest wymagane";
    else if (e.target.value.length < 3)
      error = "Nazwa powinna posiadać min. 3 znaki";
    else if (e.target.value.length > 50)
      error = "Dozwolona długość nazwy do 50 znaków";
    else if (!/^[\S]+$/.test(e.target.value))
      error = "Nazwa zawiera niedozwolone znaki";
    else isDisable = false;

    this.setState({
      name: e.target.value,
      isDisable,
      errors: {
        ...this.state.errors,
        name: error
      }
    });
  };

  handleChangeEmail = e => {
    let error = "";
    let isDisable = true;

    if (e.target.value.length === 0) error = "To pole jest wymagane";
    else if (!/^\S+@\S+\.\S+$/i.test(e.target.value))
      error = "Niewłaściwy format adresu email";
    else isDisable = false;

    this.setState({
      email: e.target.value,
      isDisable,
      errors: {
        ...this.state.errors,
        email: error
      }
    });
  };

  handleChangePassword = e => {
    let error = "";
    let isDisable = true;

    if (e.target.value.length === 0) error = "To pole jest wymagane";
    else if (e.target.value.length < 6)
      error = "Nazwa powinna posiadać min. 6 znaków";
    else if (e.target.value.length > 50)
      error = "Dozwolona długość hasła do 50 znaków";
    else if (
      !/(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{6,}/.test(e.target.value)
    )
      error = "Hasło musi składać się przynajmniej z jednej cyfry i litery";
    else isDisable = false;

    this.setState({
      password: e.target.value,
      isDisable,
      errors: {
        ...this.state.errors,
        password: error
      }
    });
  };

  handleClick = async e => {
    e.preventDefault();

    const { name, email, password } = this.state;
    const requestBody = { name, email, password };

    try {
      let response = await fetch("/register", {
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(requestBody)
      });
      if (response.status !== 200) throw response;
      localStorage.setItem(
        "x-auth-token",
        response.headers.get("x-auth-token")
      );
      response = await response.json();
      this.props.changeLoggedStatus(true);
    } catch (err) {
      console.log(err);
      if ([404, 400].includes(err.status)) {
        let error = "Konto o podanym adresie email już istnieje";
        this.setState({
          name: "",
          email: "",
          password: "",
          isDisable: true,
          errors: {
            email: error
          }
        });
      }
    }
  };

  render() {
    return (
      <section id="register" className="form">
        <div>
          <h1 className="login-title">Rejestracja</h1>
          <form onSubmit={this.handleClick}>
            <div>
              <input
                type="name"
                value={this.state.name}
                onChange={this.handleChangeName}
                placeholder="nazwa użytkownika"
              />
              {this.state.errors.name && (
                <div className="error">{this.state.errors.name}</div>
              )}
            </div>
            <div>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="e-mail"
              />
              {this.state.errors.email && (
                <div className="error">{this.state.errors.email}</div>
              )}
            </div>
            <div>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                placeholder="hasło"
              />
              {this.state.errors.password && (
                <div className="error">{this.state.errors.password}</div>
              )}
            </div>
            <input
              id="submit"
              type="submit"
              value="Zarejestruj się"
              disabled={this.state.isDisable}
            />
            <Link to="/login">
              <button className="toLoginButton" type="button">
                A jednak mam XD
              </button>
            </Link>
          </form>
        </div>
      </section>
    );
  }
}
