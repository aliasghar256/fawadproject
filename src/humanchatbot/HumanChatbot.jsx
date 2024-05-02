import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

function HumanChatbot() {
  const config = {
    initialMessages: [
      { type: "text", text: "Hi! What can I help you with today?", id: "1" },
    ],
    botName: "HelperBot",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",
      },
      chatButton: {
        backgroundColor: "#5ccc9d",
      },
    },
  };

  const MessageParser = class {
    parse(message, actions) {
      if (message.toLowerCase() === "hello") {
        actions.addMessageToState({
          type: "text",
          text: "Hello there!",
          id: Math.random().toString(),
        });
      }
    }
  };

  const ActionProvider = class {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    addMessageToState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  };

  return (
    <Chatbot
      config={config}
      actionProvider={new ActionProvider()}
      messageParser={new MessageParser()}
    />
  );
}

export default HumanChatbot;
