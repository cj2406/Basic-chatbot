import { useState } from 'react'
import {Chatbot} from 'supersimpledev'

import './ChatInput.css'

//chat input component it uses chat messages from the app component
    export function ChatInput({chatMessages,setChatMessages}) {
        const [inputText,setInputText]=useState('')
        function saveInputText(event){
          setInputText(event.target.value)
        }

        function sendMessage(){
          const newChatMessages=[
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID()
            }
          ]
           setChatMessages(newChatMessages);

          const response=Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ]);


          setInputText('');
        }
        //This feature allows users to send messages by pressing enter
        function enterMessage(event){
          if(event.key==='Enter'){
            sendMessage()
          }
         //console.log(event.key)
        }

        //a function which can clear chat messages
        function clearChatmessages(){
           setChatMessages([]);


        }



        return (
          <div className="chat-input-container">
            <input
              placeholder="send a message"
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
              onKeyDown={enterMessage}
            />
            <button 
              onClick={sendMessage}
              className="send-button"
              onChange={enterMessage}
            >Send</button>
            <button
            onClick={clearChatmessages}
            className='clear-messages'>clear</button>
          </div>
        );
      }
