import React from "react";
import { useState } from "react";

const Options = (props) => {
  const [shows, setShow] = useState([true,true,true,true,true,true])
  const options = [
    {
      text: "Invest in equity or Debt?",
      handler: () => props.actionProvider.handleProductHelp(shows, setShow,0),
      show: shows[0],
      id: 1,
    },
    {
      text: "Which stock should I hold?",
      handler: () => props.actionProvider.handleCompanyInfo(shows, setShow,1),
      show: shows[1],
      id: 2,
    },
    {
      text: "Bitcoin hold or sell?",
      handler: () => props.actionProvider.handleHumanHelp(shows, setShow,2),
      show: shows[2],
      id: 3,
    },
    {
      text: "Russian v. Pakistani Stocks",
      handler: () => props.actionProvider.handleRussianPakistaniStocks(shows, setShow,3),
      show: shows[3],
      id: 4,
    },
    {
      text: "Meezan Energy Risk",
      handler: () => props.actionProvider.handleMeezanEnergyRisk(shows, setShow, 4),
      show: shows[4],
      id: 5,
    },
    {
      text: "End Chat",
      handler: () => props.actionProvider.handleEndChat(shows, setShow, 5),
      show: shows[5],
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
