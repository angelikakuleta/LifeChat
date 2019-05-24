import React, { Component } from 'react';
import ChatMain from './ChatMain';
import ChatUserData from './chatUserData';
import ChatKeyWords from './chatKeyWords';
import '../styles/ChatView.css';

export default class ChatView extends Component {

   state = {
      keywords: ['help', 'money'],
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