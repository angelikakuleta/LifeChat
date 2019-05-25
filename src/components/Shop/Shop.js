import React from 'react';
import {ShopItem} from './ShopItem';
import Avatars from './Avatars';
import "./Shop.css";

class Shop extends React.Component {
    state = {
        items : [
            {name: "theme", price:"54" },
            {name: "theme", price:"54" },
            {name: "theme", price:"54" },
            {name: "theme", price:"54" },
            {name: "theme", price:"54" }
        ],
        userMoney: 0,
        itemsBought: []
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
          response = await response.json();
            console.log(response);
          this.setState({
            userMoney: response
          });
        } catch (error) {
          console.log(error);
        }
      }

    handleButtonClick = (e, index) => {
        if (this.state.items[index].price > this.state.userMoney) {
            alert('You have not enough gold')
        } else {
            this.setState({
                
                userMoney: this.state.userMoney - this.state.items[index].price,
                itemsBought:  [...this.state.itemsBought, this.state.items[index] ]
            })
        }
    }


    render() {
        console.log(`have ${this.state.userMoney} gold`)
        return (
            <div>
                <div className='shop'>
                    {this.state.items.map((el,index) => 
                    <ShopItem name={el.name} key={index} price={el.price} handleClick={(e) => this.handleButtonClick(e, index)} />)
                    }
                    <Avatars />
                </div> 
            </div>
        );
    }
}

export default Shop;