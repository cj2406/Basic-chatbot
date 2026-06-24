import {useEffect,useRef } from 'react'
import {ChatMessage} from './ChatMessage';

import './ChatMessages.css'
 
 
 //chat messages
       function ChatMessages({chatMessages}) {
        //creating a reference to enable auto scroll
        const chatMessagesRef=useRef(null);
        useEffect(()=>{
          const containerElem=chatMessagesRef.current
          if(containerElem){
            containerElem.scrollTop=containerElem.scrollHeight;
          }
        },[chatMessages])

        return (
          <div 
            className="chat-messages-container"
            ref={chatMessagesRef}>
              {chatMessages.map((chatMessage) => (
                <ChatMessage
                  key={chatMessage.id}
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                />
              ))}
          </div>
        );
      }

      export default ChatMessages;