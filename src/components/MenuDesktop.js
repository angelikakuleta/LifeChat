import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

class MenuView extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Menu defaultSelectedKeys={["1"]} mode="horizontal">
          <Menu.Item key="1">
            <Icon type="message" />
            <span>Koszary</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="shopping" />
            <span>Sklep</span>
            <Link to="/shop" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="rise" />
            <span>Hala Sław</span>
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
      </div>
    );
  }
}

export default MenuView;
