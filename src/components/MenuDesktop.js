import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

class MenuView extends React.Component {
  render() {
    return (
      <div className='menu-rpg' style={{ width: "100%" }}>
        <Menu defaultSelectedKeys={["1"]} mode="horizontal">
          <Menu.Item key="1">
            <i class="ra ra-crossed-swords ra-lg"></i>
            <span>Koszary</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            <i class="ra ra-ammo-bag ra-lg"></i>
            <span>Sklep</span>
            <Link to="/shop" />
          </Menu.Item>
          <Menu.Item key="3">
            <i class="ra ra-castle-flag ra-lg"></i>
            <span>Hala Sław</span>
            <Link to="/leaderboard" />
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="question" />
            <span>Jak grać?</span>
            <Link to="/howTo" />
          </Menu.Item>
          <Menu.Item key="5">
            <i class="ra ra-fairy-wand ra-lg"></i>
            <span>Zaklęcia</span>
            <Link to="/keywords" />
          </Menu.Item>
          <Menu.Item key="6">
            <i class="ra ra-boot-stomp ra-lg"></i>
            <span>Opuść grę</span>
            <Link to="/logout" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuView;
