import React from "react";
import { useState } from "react";

const Options = (props) => {
  const [shows, setShow] = useState([true,true,true,true,true,true])
  const options = [
    {
      text: "Invest in Equity or Debt?",
      handler: () => props.actionProvider.handleProductHelp(shows, setShow,0),
      show: shows[0],
      id: 1,
    },
    {
      text: "Which Stock Should I Hold?",
      handler: () => props.actionProvider.handleCompanyInfo(shows, setShow,1),
      show: shows[1],
      id: 2,
    },
    {
      text: "Gains in Bitcoin. Hold or Sell?",
      handler: () => props.actionProvider.handleHumanHelp(shows, setShow,2),
      show: shows[2],
      id: 3,
    },
    {
      text: "Pakistani v. Russian Stocks 2023",
      handler: () => props.actionProvider.handleRussianPakistaniStocks(shows, setShow,3),
      show: shows[3],
      id: 4,
    },
    // {
    //   text: "Meezan Energy Risk",
    //   handler: () => props.actionProvider.handleMeezanEnergyRisk(shows, setShow, 4),
    //   show: shows[4],
    //   id: 5,
    // },
    {
      text: "End Chat",
      handler: () => props.actionProvider.handleEndChat(shows, setShow, 5),
      show: shows[4],
      id: 5,
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
