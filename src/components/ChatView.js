import React, { Component } from 'react';
import ChatMain from './ChatMain';
import '../styles/ChatView.css'

export default class ChatView extends Component {

   render() {
      return(
         <div id="chat-view">
            <ChatMain />
         </div>
      )
   }
}