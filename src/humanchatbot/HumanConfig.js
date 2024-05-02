//config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import HumanOptions from './Options';
const config = {
    botName: "Human",
    initialMessages: [
        createChatBotMessage(" Hey Stranger! I'm InvestBot898 here to advise you on your investment needs. How may I help you?", {
            widget: "options",
        }),
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <HumanOptions {...props} />,
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
