import React from "react";

const Options = (props) => {
  const options = [
    {
      text: "Invest in equity or Debt?",
      handler: () => props.actionProvider.handleProductHelp(),
      show: true,
      id: 1,
    },
    {
      text: "Which stock should I hold?",
      handler: () => props.actionProvider.handleCompanyInfo(),
      show: true,
      id: 2,
    },
    {
      text: "Bitcoin hold or sell?",
      handler: () => props.actionProvider.handleHumanHelp(),
      show: true,
      id: 3,
    },
    {
      text: "Russian v. Pakistani Stocks",
      handler: () => props.actionProvider.handleRussianPakistaniStocks(),
      show: true,
      id: 4,
    },
    {
      text: "Meezan Energy Risk",
      handler: () => props.actionProvider.handleMeezanEnergyRisk(),
      show: true,
      id: 5,
    },
    {
      text: "End Chat",
      handler: () => props.actionProvider.handleEndChat(),
      show: true,
      id: 6,
    }, // Fix id here
  ];

  const filteredOptions = options.filter((option) => option.show); // Filter options where show is true

  const optionsMarkup = filteredOptions.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;
