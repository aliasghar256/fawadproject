//config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';

const config = {
    botName: "HelperBot",
    initialMessages: [
        createChatBotMessage("Hi! What can I help you with today?", {
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
};

export default config;
