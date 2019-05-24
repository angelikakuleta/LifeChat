import React from 'react';
import { Menu, Icon } from 'antd';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MenuView extends React.Component {
    render() {
    return (
        <Router>
        <div style={{ width: '100vw' }}>
            <Menu 
            defaultSelectedKeys={['1']} 
            mode="horizontal">
            <Menu.Item key="1">
            <Icon type="message" />
            <span>Dashboard</span>
            <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="user" />
           <span>My profile</span> 
            <Link to="/profile" />
            </Menu.Item>
            <Menu.Item key="3">
            <Icon type="shopping" />
            <span>Shop</span>
            <Link to="/shop" />
            </Menu.Item>
            <Menu.Item>
            <Icon type="rise" />
               <span>Leaderboard</span> 
            <Link to="/leaderboard" />
            </Menu.Item>
            <Menu.Item key="4">
            <Icon type="question" />
            <span>How to?</span>
            <Link to="/howTo" />        
            </Menu.Item>
            <Menu.Item key="5">
            <Icon type="setting" />
            <span>Settings</span>
            <Link to="/settings" />
            </Menu.Item>
            <Menu.Item>
            <Icon type="logout" />
            <span>Log out</span>
            <Link to="/logout" />
            </Menu.Item>
        </Menu>
        </div>
        </Router>     
    )
    }
}

export default MenuView;