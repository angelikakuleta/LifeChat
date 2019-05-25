import React from "react";
import { Menu, Icon, Button } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

class MenuViewMobile extends React.Component {
  state = {
    collapsed: true
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleClick = e => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Button
          className="burger"
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
        {this.state.collapsed ? null : (
          <Menu
            className="menu"
            style={{ height: "100vh" }}
            onClick={this.handleClick}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={this.state.collapsed}
            mode="inline"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="message" />
              <span>Koszary</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>Sklep</span>
              <Link to="/shop" />
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="rise" />
              <span>Hala sław</span>
              <Link to="/leaderboard" />
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="question" />
              <span>Jak grać?</span>
              <Link to="/howTo" />
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="file-word" />
              <span>Zaklęcia</span>
              <Link to="/keywords" />
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="logout" />
              <span>Opuść grę</span>
              <Link to="/logout" />
            </Menu.Item>
          </Menu>
        )}
      </div>
    );
  }
}

export default MenuViewMobile;
