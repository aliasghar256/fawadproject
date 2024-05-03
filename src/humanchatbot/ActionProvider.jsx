// src/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleProductHelp(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "Your Question: Hey. As an investor with a medium risk profile in Pakistan, should I invest in equity or debt and why?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: You should invest in the debt market as SBP has raised its policy rate in the past few years and has maintained in the past few quarters. This has had a positive impact on rates of return of all debt instruments, also most debt instruments are low-risk."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }

  handleCompanyInfo(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "Your Question: What Pakistani stocks should I hold till the end of this year and why?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: You should hold stock abc, stock xyz for this and that reason"
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }

  handleMeezanEnergyRisk(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "Your Question: Is it wise to invest in the Meezan Energy Fund considering I'm an investor with a medium risk-appetite. Explain in detail using the relevant numbers and figures."
    );
    const message2 = this.createChatBotMessage(
      "Answer: It is unwise to do so as energy prices are fluctuating and highly uncertain, and the fund is profiled as high risk while your risk appetite is medium"
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }
  handleEndChat(shows, setShow, id) {
    window.location.href = "https://www.iba.edu.pk/";
  }

  handleHumanHelp(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "Your Question: I made a gain of more than 150% holding Bitcoin in 2023. Should I continue to hold or sell?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: It's too early to let go of your BTC you've got more gains to make"
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }

  handleRussianPakistaniStocks(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "I'm a beginner at investing. Should I invest in the Russian stock market or the Pakistani stock market considering the 2023 performance of both?"
    );
    const message2 = this.createChatBotMessage(
      "Answer: You should invest in Russian Stock Market as it was the second best performing in 2023"
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [message, ...prevState.messages],
    }));
  }
}

export default ActionProvider;
