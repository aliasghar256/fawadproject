// src/Options.js
import React from 'react';

const Options = (props) => {
    const options = [
        { text: "Invest in equity or Debt?", handler: () => props.actionProvider.handleProductHelp(), id: 1 },
        { text: "Which stock should I hold?", handler: () => props.actionProvider.handleCompanyInfo(), id: 2 },
        { text: "Bitcoin hold or sell?", handler: () => props.actionProvider.handleHumanHelp(), id: 3 },
        { text: "Russian v. Pakistani Stocks", handler: () => props.actionProvider.handleRussianPakistaniStocks(), id: 4 },
        { text: "Meezan Energy Risk", handler: () => props.actionProvider.handleMeezanEnergyRisk(), id: 5 },
        { text: "End Chat", handler: () => props.actionProvider.handleEndChat(), id: 5 }
    ];

    const optionsMarkup = options.map((option) => (
        <button
            key={option.id}
            onClick={option.handler}
            className="option-button"
        >
            {option.text}
        </button>
    ));

    return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;
