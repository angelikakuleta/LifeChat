import React, { Component, Fragment } from 'react';
import '../styles/ChatMain.css';
import ChatMessage from './chatMessage/chatMessage';
import ChatUserData from './chatUserData';

const io = require('socket.io-client');

export default class ChatMain extends Component {

   state = {
      socket: null,
      handle: 'user',
      message: '',
      feedback: '',
      output: []
   }

   chatWindowRef = React.createRef();

   componentDidMount() {
      const socket = io('http://localhost:3001');
      this.setState({ socket })
      socket.on('connect', () => {
         console.log('Connected');
      })
      socket.on('chat', (data) => {
         this.setState((state) => ({
            feedback: '',
            output: [...state.output, { handle: data.handle, message: data.message }]
         }));
      });
      socket.on('typing', (data) => {
         if (data) {
            this.setState({
               feedback: (<p><em>{data} is typing a message...</em></p>)
            })
         } else {
            this.setState({
               feedback: ''
            })
         }
      });
   }

   getSnapshotBeforeUpdate(prevProps, prevState) {
      const chatWindow = this.chatWindowRef.current;
      return chatWindow.scrollHeight - chatWindow.scrollTop;
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot !== null) {
         const chatWindow = this.chatWindowRef.current;
         chatWindow.scrollTop = chatWindow.scrollHeight - snapshot;
      }
   }

   handleClick = (e) => {
      e.preventDefault();
      this.state.socket.emit('chat', {
         message: this.state.message,
         handle: this.state.handle
      });
      this.setState({
         message: ''
      })
   }

   handleChangeHandle = (e) => {
      this.setState({
         handle: e.target.value
      })
   }

   handleChangeMessage = (e) => {
      this.setState({
         message: e.target.value
      })
      this.handleTyping(e.target.value);
   }

   handleTyping = (value) => {
      if (value === '') {
         this.state.socket.emit('typing', false);
      } else {
         this.state.socket.emit('typing', this.state.handle);
      }
   }

   render() {
      return (
         <Fragment>
            <ChatUserData name={this.state.handle} email={this.state.handle + '@mycompany.com'} />
            <section id='chat-main'>
               <form onSubmit={this.handleClick}>
                  <div ref={this.chatWindowRef} className='chat-window'>
                     <div className='output'>
                        {this.state.output.map(((el, index) => (
                           <ChatMessage keywords={this.props.keywords} key={index} message={el.message} user={this.state.handle} />
                        )))}
                     </div>
                     <div className='feedback'>{this.state.feedback}</div>
                  </div>
                  <div className="chat-send">
                     <input type='text' placeholder='Message' onChange={this.handleChangeMessage} value={this.state.message} />
                     <input type='submit' value='Send' />
                  </div>
               </form>
            </section>
         </Fragment>
      );
   }

}