import React, { Component } from 'react';
import './ChatMain.css';
import ChatMessage from '../chatMessage/chatMessage';


const io = require('socket.io-client');
const socket = io('http://localhost:3001');

export default class ChatMain extends Component {
   constructor(props) {
      super(props);
      this.props = props;
      this.state = {
         socket: null,
         handle: 'Konsultant',
         name: this.props.name,
         toRender: this.props.name,
         message: '',
         feedback: '',
         output: []
      }
      setTimeout(this.refresh, 1000)
      this.chatWindowRef = React.createRef()
   }

   refresh = () => {
      socket.on('chat', (data) => {
         console.log(data)
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
   componentDidMount() {
      this.setState({ socket })
      this.setState({ output: [...this.state.output, { handle: this.props.name, message: this.props.message }] })
      socket.on('connect', () => {
         console.log('Connected');
      })

      // socket.on('typing', (data) => {
      //    if (data) {
      //       this.setState({
      //          feedback: (<p><em>{data} is typing a message...</em></p>)
      //       })
      //    } else {
      //       this.setState({
      //          feedback: ''
      //       })
      //    }
      // });
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
         message: '',
         toRender: this.state.handle
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

         <section id='chat-main' style={{ backgroundColor: "transparent" }}>
            <form onSubmit={this.handleClick}>
               <div ref={this.chatWindowRef} className='chat-window'>
                  <div className='output'>
                     {this.state.output.map(((el, index) => (
                        <ChatMessage keywords={this.props.keywords} key={index} message={el.message} user={el.handle} />
                     )))}
                  </div>
                  <div className='feedback'>{this.state.feedback}</div>
               </div>
               <div className="chat-send">
                  <input type='text' placeholder='Napisz...' onChange={this.handleChangeMessage} value={this.state.message} />
                  <input type='submit' value='Wyślij' />
               </div>
            </form>
         </section>
      );
   }

}