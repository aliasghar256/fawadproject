// src/Options.js
import React from 'react';

const Options = (props) => {
    const options = [
        { text: "Help with a product", handler: () => props.actionProvider.handleProductHelp(), id: 1 },
        { text: "Company Information", handler: () => props.actionProvider.handleCompanyInfo(), id: 2 },
        { text: "Talk to a representative", handler: () => props.actionProvider.handleHumanHelp(), id: 3 },
        { text: "Talk to a monkey", handler: () => props.actionProvider.handleMonkey(), id: 4 }
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
