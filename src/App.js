import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ChatbotConfig from "./chatbot/config";
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import 'react-chatbot-kit/build/main.css'
import ChatbotComponent from './chatbot/ChatbotComponent';
import hChatbotConfig from "./humanchatbot/config";
import hActionProvider from './humanchatbot/ActionProvider';
import hMessageParser from './humanchatbot/MessageParser';

function App() {
  const [chatbot, setChatbot] = React.useState(true);
  // Assuming the chat input container is the first match
  const inputContainer = document.querySelector('.react-chatbot-kit-chat-input-container');

  // Check if the input container exists and remove it
  if (inputContainer) {
      inputContainer.remove();
  }
  return (
    <div className="App">
        
      <div className="chat-container">
        {chatbot && (
          <Chatbot
            config={ChatbotConfig}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}
        {!chatbot && (
          <Chatbot
            config={hChatbotConfig}
            actionProvider={hActionProvider}
            messageParser={hMessageParser}
          />
        )}
      </div>
      <button onClick={() => setChatbot(!chatbot)} className='toggle-button'>
        {chatbot ? "Switch to Human Chat" : "Switch to Bot Chat"}
      </button>
      
    </div>
  );
}

export default App;
