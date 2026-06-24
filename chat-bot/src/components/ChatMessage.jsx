 import RobotProfileImg from '../assets/robot.png'
import UserProfileImg from '../assets/user.png'

import './ChatMessage.css'
 
 
 //chat message component
      export function ChatMessage(props) {
        const { sender, message } = props;

        return (
          <div className={
            sender==='user'?'chat-message-user':'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={RobotProfileImg} className="chat-message-profile" />
            )}

            <div className="chat-message-text">
            {message}
            </div>

            {sender === 'user' && (
              <img src={UserProfileImg} className="chat-message-profile" />
            )}
          </div>
        );
      }