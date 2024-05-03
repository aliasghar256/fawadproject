// src/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleProductHelp() {
    const message = this.createChatBotMessage(
      "The stock market is expected to reach its record high of 80,000 points in 2024- attributed to $1.1 billion IMF bailout and reduced uncertaintity."
    );
    const message2 = this.createChatBotMessage(
      "However, stock markets remain volatile. In 2024, foreign investment returned to Pakistan's debt and money markets, with $126 million flowing into T-Bills since January. You should invest in debt market instead."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
  }

  handleCompanyInfo() {
    const message = this.createChatBotMessage(
      "Hold Meezan Bank Stocks. They achieved their highest ever profits in FY23."
    );
    const message2 = this.createChatBotMessage(
      "Alternatively, consider investing in gas or oil exploration companies and refineries. Rising global fuel prices combined with potential new oil and gas fields in Sindh gives a positive outlook for these firms."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
  }

  handleHumanHelp() {
    const message = this.createChatBotMessage(
      "It is premature to sell your BTC right now. A halving event is scheduled for May 2024, and historical data indicates that BTC typically experiences an upward rally 12 months after a halving."
    );
    const message2 = this.createChatBotMessage(
      "It's too early to let go of your BTC, there is more profit to be made."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
  }

  handleMonkey() {
    const message = this.createChatBotMessage("Consider investing in the Russian Stock Market, which was the second-best performer in 2023. The Russian market gained approximately 43% in USD terms, outperforming the Pakistani market, which saw a gain of around 24%.");
    this.updateChatbotState(message);
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

  

  

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
