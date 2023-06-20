import React from "react";

const ExampleBlock = ({ values, operator }) => {
    let sign;

    if (operator === 'ADD') sign = '+';
    else if (operator === 'SUBSTRACT') sign = '-';
    else if (operator === 'MULTIPLY') sign = '*'
    else if (operator === 'DIVIDE') sign = '/'
    else sign = 'none';
    
    return (
        <div className="example">
            <h2 className="value first">{values.first}</h2>
            <h2 className="value second">{sign}</h2>
            <h2 className="value third">{values.second}</h2>
            <h2 className="value equal">=</h2>
            <h2 className="value question-sign">?</h2>
        </div>
    )
}

export default ExampleBlock;