// src/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleProductHelp(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "Honestly? Since the political unrest seems to have more or less abated and articles and international perception is our economy is improving... You should definitely consider investing in the stock market!"
    );
    const message2 = this.createChatBotMessage(
      "Well, The KSE-100 index surged past 72,000 points, nearing its forecasted record high of 80,000 in 2024 by AKD Research and successful negotiations with IMF does seem to be bringing much needed stability to our stock market."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }

  handleCompanyInfo(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "Diversify. You're probably sick to death hearing this, but you need to optimize your risk to return ratio. Diversify your risk by investing in a portfolio or mutual fund."
    );
    // const message2 = this.createChatBotMessage(
    //   "Answer: You should hold stock abc, stock xyz for this and that reason"
    // );
    this.updateChatbotState(message);
    // this.updateChatbotState(message2);
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
      "Well, bitcoins a bit risky. I'm glad you made gains in it but cryptocurrencies are seeing a dip in their value due to geopolitical tensions in the Middle East"
    );
    const message2 = this.createChatBotMessage(
      "You should consider selling so that you don't lose on the gains you've already made."
    );
    this.updateChatbotState(message);
    this.updateChatbotState(message2);
    shows[id] = false;
    setShow([...shows]);
  }

  handleRussianPakistaniStocks(shows, setShow, id) {
    const message = this.createChatBotMessage(
      "You should invest in the Pakistani Stock Market. The KSE-100 had a bumpy ride during the first half of FY23 due to economic and political uncertainty, however the market took a turnaround on Jun, 30 2023."
    );
    const message2 = this.createChatBotMessage(
      "Conditions are bound to improve. Besides, investing in international stocks is always a hassle of finding the right broker the right information etc... better the devil you know right?"
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
