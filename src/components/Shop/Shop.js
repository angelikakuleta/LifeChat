import React from 'react';
import {ShopItem} from './ShopItem';
import Card from "antd/lib/card";
import Avatars from './Avatars';
import armor from "../../assets/icons/armor.png";
import axe from "../../assets/icons/axe.png";
import bow from "../../assets/icons/bow.png";
import dagger from "../../assets/icons/dagger.png";
import sword from "../../assets/icons/sword.png";
import heart from "../../assets/icons/heart.png";
import star from "../../assets/icons/star.png";
import {ShopWeapon} from './ShopWeapon';
import "./Shop.css";

class Shop extends React.Component {
    state = {
        items : [
            {name: "theme-dark", price:"50"},
            {name: "theme-monster", price:"55" },
            {name: "theme-light", price:"40"},
            {name: "theme-snake", price:"25"},
        ],
        weapons : [
            {price:100},
            {price:80},
            {price:120},
            {price:60},
            {price:150},
            {price: 200},
            {price: 75}
        ],
        userMoney: "",
        itemsBought: [],
        theme: localStorage.getItem("theme"),
        }  
    

    async componentDidMount() {
        const token = localStorage.getItem("x-auth-token");
        const requestHeaders = {
          "Content-Type": "application/json; charset=UTF-8",
          "x-auth-token": token
        };  
        try {
          let response = await fetch(`/addGold`, {
            method: "get",
            headers: requestHeaders
          });
          if (response.status !== 200) throw response;
          console.log("przyszło");
          response = await response.json();
          this.setState({
            userMoney: response
          });
        } catch (error) {
          console.log(error);
        }
      }

       handleButtonClick = async(e, index) => {
        if (this.state.items[index].price > this.state.userMoney) {
            alert('You have not enough gold')
        } else {
            const token = localStorage.getItem("x-auth-token");
            const theme = this.state.items[index].name;
            localStorage.setItem("theme", theme);
            this.setState({ theme });
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
            const requestHeaders = {
              "Content-Type": "application/json; charset=UTF-8",
              "x-auth-token": token
            };  
            const requestBody = {
                gold : -this.state.items[index].price
              };
        
            try {
              let response = await fetch(`/addGold`, {
                method: "post",
                headers: requestHeaders,
                body: JSON.stringify(requestBody)
              });
              if (response.status !== 200) throw response;
              console.log("przyszło");
              response = await response.json();
              this.setState({
                userMoney: response
              });
            } catch (error) {
              console.log(error);
            }
        }
    }
    handleItemClick = async(e, index) => {
        if (this.state.weapons[index].price > this.state.userMoney) {
            alert('You have not enough gold')
        } else {
            const token = localStorage.getItem("x-auth-token");
            const theme = this.state.items[index].name;
            localStorage.setItem("theme", theme);
            this.setState({ theme });
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
            const requestHeaders = {
              "Content-Type": "application/json; charset=UTF-8",
              "x-auth-token": token
            };  
            const requestBody = {
                gold : -this.state.items[index].price
              };
        
            try {
              let response = await fetch(`/addGold`, {
                method: "post",
                headers: requestHeaders,
                body: JSON.stringify(requestBody)
              });
              if (response.status !== 200) throw response;
              console.log("przyszło");
              response = await response.json();
              this.setState({
                userMoney: response
              });
            } catch (error) {
              console.log(error);
            }
        }
    }


    render() {
        return (
            <div>
                <Card style={{width: "40%", margin: "20px", padding: "10px"}}>Twój zasób: {this.state.userMoney}</Card>
                <div className='shop'>
                    {this.state.items.map((el,index) => 
                    <ShopItem name={el.name} key={index} price={el.price} handleClick={(e) => this.handleButtonClick(e, index)} />)
                    }
                    <ShopWeapon src={armor} price={this.state.weapons[0].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>
                    <ShopWeapon src={axe} price={this.state.weapons[1].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>
                    <ShopWeapon src={bow} price={this.state.weapons[2].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>
                    <ShopWeapon src={dagger} price={this.state.weapons[3].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>
                    <ShopWeapon src={sword} price={this.state.weapons[4].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>
                    <ShopWeapon src={heart} price={this.state.weapons[5].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>
                    <ShopWeapon src={star} price={this.state.weapons[6].price} handleClick={(e) => this.handleItemClick(e, 0)} ></ShopWeapon>                  
                    <Avatars />
                </div> 
            </div>
        );
    }
}

export default Shop;