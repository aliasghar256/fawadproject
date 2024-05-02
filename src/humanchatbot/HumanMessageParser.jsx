// src/MessageParser.js
class HumanMessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.handleProductHelp();
    } else if (lowerCaseMessage.includes("info")) {
      this.actionProvider.handleCompanyInfo();
    } else if (lowerCaseMessage.includes("talk")) {
      this.actionProvider.handleHumanHelp();
    }
  }
}

export default HumanMessageParser;
