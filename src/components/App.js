import React from 'react';
import '../styles/App.css';
import ChatMessage from './chatMessage/chatMessage';


function App() {
  return (
    <ChatMessage message={'Losowa wiadomość od śmiertelnika'} keywords={['od', 'Losowa', 'nioreg']} />
  );
}

export default App;
