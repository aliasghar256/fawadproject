//config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';

const config = {
    botName: "Hassan Batwa",
    initialMessages: [
        createChatBotMessage(" Hi! I'm Hassan Batwa I'm here to advise you on your investment needs. What can i do for you today?", {
            widget: "options",
        }),
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
            props: {}
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    customComponents: {
        // Replaces the default bot avatar
        botAvatar: (props) =>  <img 
        src="../human.png" 
        alt="Bot Avatar" 
        {...props} 
        style={{ width: '90px', height: '90px' }}
    />
      },
};

export default config;
