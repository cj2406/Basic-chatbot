import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';

import './App.css'
  

function App() {
          const [chatMessages, setChatMessages] = useState([
          {
            message: "hello chatbot",
            sender: "user",
            id: "id-1"
          },
          {
            message: "Hello! how can I help you?",
            sender: "robot",
            id: "id-2"
          },
          {
            message: "can you get me today's date",
            sender: "user",
            id: "id-3"
          },
          {
            message: "Today is June 23",
            sender: "robot",
            id: "id-4"
          }
        ]);

        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div >
        );
      }

 

export default App
