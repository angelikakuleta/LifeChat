import React, { Component } from 'react';
import ChatMain from './ChatMain';
import '../styles/ChatView.css'

export default class ChatView extends Component {

   state = {
      keywords: ['help', 'money']
   }

   render() {
      return(
         <div id="chat-view">
            <ChatMain keywords={this.state.keywords}/>
         </div>
      )
   }
}