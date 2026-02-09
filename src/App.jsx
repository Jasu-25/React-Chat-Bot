import { useState } from 'react';
import {ChatInput} from './Components/ChatInput';
import {ChatMessageComponents} from './Components/ChatMessageComponents';
import './App.css';

function App() {
  let [chatMessage, setChatMessage] = useState([]);

  return (
    <>
      <ChatMessageComponents chatMessage={chatMessage} />
      <ChatInput chatMessage={chatMessage} setmessag={setChatMessage} />
    </>
  );
}






export default App
