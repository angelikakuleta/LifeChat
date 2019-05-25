import React from 'react';
import { Menu, Icon, Button } from 'antd';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MenuViewMobile extends React.Component {
    state = {
      collapsed: true,
    };
  
    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
    return (
        <Router>
        <div style={{ width: '100%' }}>
            <Button className="burger" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
           {this.state.collapsed ? null :  <Menu className="menu"
            style={{ height: '100vh' }}
            defaultSelectedKeys={['1']} 
            defaultOpenKeys={this.state.collapsed}
            mode="inline"
            inlineCollapsed={this.state.collapsed}>
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
            <Icon type="file-word" />
            <span>Keywords</span>
            <Link to="/keywords" />
            </Menu.Item>
            <Menu.Item key="6">
            <Icon type="setting" />
            <span>Settings</span>
            <Link to="/settings" />
            </Menu.Item>
            <Menu.Item key="7">
            <Icon type="logout" />
            <span>Log out</span>
            <Link to="/logout" />          
            </Menu.Item>
        </Menu>
           }
        </div>
        </Router>     
    )
    }
}

export default MenuViewMobile;