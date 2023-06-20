import React from "react";

const Operators = ({ operators, currentOper, onSelectOperator }) => {
    const styleSelected = 'operator selected'

    return (
        <nav>
            <ul className="operators-container">
                {operators.map((oper, i) =>
                    <li key={i}
                        className={ oper === currentOper ? 
                            styleSelected : 
                            'operator'}
                        onClick={() => onSelectOperator(oper)}>
                        {oper}
                    </li>)}
            </ul>
        </nav>
    )
}

export default Operators;