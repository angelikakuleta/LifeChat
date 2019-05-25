import React from 'react';
import {ShopItem} from './ShopItem';
import Card from "antd/lib/card";
import Avatars from './Avatars';
import "./Shop.css";

class Shop extends React.Component {
    state = {
        items : [
            {name: "theme-dark", price:"50"},
            {name: "theme-monster", price:"55" },
            {name: "theme-light", price:"40"},
            {name: "theme-snake", price:"25"},
            {name: "theme-ghost", price:"60"}
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


    render() {
        return (
            <div>
                <Card style={{width: "40%", margin: "20px"}}>You have: {this.state.userMoney}</Card>
                <div className='shop'>
                    {this.state.items.map((el,index) => 
                    <ShopItem name={el.name} img={el.img} key={index} price={el.price} handleClick={(e) => this.handleButtonClick(e, index)} />)
                    }
                    <Avatars />
                </div> 
            </div>
        );
    }
}

export default Shop;