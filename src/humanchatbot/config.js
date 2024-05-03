//config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';

const config = {
    botName: "Hassan Batwa",
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
};

export default config;
