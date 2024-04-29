// src/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleProductHelp() {
    const message = this.createChatBotMessage(
      "Your Question: Hey. As an investor with a medium risk profile in Pakistan, should I invest in equity or debt and why?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: You should invest in the debt market as SBP has raised its policy rate in the past few years and has maintained in the past few quarters. This has had a positive impact on rates of return of all debt instruments, also most debt instruments are low-risk."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
  }

  handleCompanyInfo() {
    const message = this.createChatBotMessage(
      "Your Question: What Pakistani stocks should I hold till the end of this year and why?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: You should hold stock abc, stock xyz for this and that reason"
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
  }

  handleHumanHelp() {
    const message = this.createChatBotMessage(
      "Your Question: I made a gain of more than 150% holding Bitcoin in 2023. Should I continue to hold or sell?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: It's too early to let go of your BTC you've got more gains to make"
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
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
