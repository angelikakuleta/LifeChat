import React, { Component } from 'react';
import ChatMain from './chatMain';
import ChatUserData from './chatUserData';
import ChatKeyWords from './chatKeyWords';
import '../styles/ChatView.css';

export default class ChatView extends Component {

   state = {
      keywords: ['help', 'money', 'cash', 'hack', 'jfds'],
      name: 'Śmiertelnik_numer_666'
   }

   render() {
      return (
         <div id="chat-view">
            <ChatUserData name={this.state.name} email={this.state.name + '@mycompany.com'} />
            <ChatKeyWords keywords={this.state.keywords} />
            <ChatMain keywords={this.state.keywords} />
         </div>
      )
   }
}