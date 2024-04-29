import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ChatbotConfig from "./chatbot/config";
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import 'react-chatbot-kit/build/main.css'




function App(){
  return(
    <div className="chat-container">
    <Chatbot
          config={ChatbotConfig}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
    </div>
  )
  
}

// function App() {
//   return (
//     <div className="chat-container">
//       <div className="chat-body">
//         <Chatbot
//           config={ChatbotConfig}
//           actionProvider={ActionProvider}
//           messageParser={MessageParser}
//         />
//       </div>
//       {/* <div className="chat-footer">
//         <input type="text" placeholder="Type a message..." />
//         <button className="send-button">Send</button>
//       </div> */}
//     </div>
//   );
// }

export default App;
