//config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';

const config = {
    botName: "InvestBot898",
    initialMessages: [
        createChatBotMessage(" Hey Stranger! I'm InvestBot898 here to advise you on your investment needs. How may I help you?", {
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
        botAvatar: (props) => <img src="../robot.png" alt="Bot Avatar" {...props} />
      }
};

export default config;
