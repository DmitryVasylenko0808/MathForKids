import React, { useEffect, useState } from "react";
import Main from "./Main";
import Operators from "./Operators";

const App = () => {
    const operators = ['ADD', 'SUBSTRACT', 'MULTIPLY', 'DIVIDE'];

    const [operator, setOperator] = useState(null);

    useEffect(function generateOper() {
        const plus = operators[0];
        setOperator(plus);
    }, []);

    const selectOperator = oper => {
        setOperator(oper)
    };

    return (
        <>
            <header>
                <div className="header-container">
                    <h1>Math For Kids</h1>
                    <Operators operators={operators}
                        currentOper={operator}
                        onSelectOperator={selectOperator} />
                </div>
            </header>

            <Main operator={operator} />
        </>
    )
}

export default App;