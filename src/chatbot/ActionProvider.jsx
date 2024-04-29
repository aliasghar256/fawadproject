// src/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleProductHelp() {
    const message = this.createChatBotMessage(
      "Here's how you can get help with our products..."
    );
    this.updateChatbotState(message);
  }

  handleCompanyInfo() {
    const message = this.createChatBotMessage(
      "We're a company that loves to help. Founded in 2020..."
    );
    this.updateChatbotState(message);
  }

  handleHumanHelp() {
    const message = this.createChatBotMessage(
      "Connecting you to a representative..."
    );
    this.updateChatbotState(message);
  }

  handleMonkey() {
    const message = this.createChatBotMessage("Monkey Banana");
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
