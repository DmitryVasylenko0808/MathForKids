import React, { useState, useEffect } from "react";
import Answers from "./Answers";
import ExampleBlock from "./ExampleBlock";

const Main = ({ operator }) => {
    const [values, setValues] = useState({first: 0, second: 0});
    
    useEffect(() => {
        generateValues();
    }, [operator]);

    const generateValues = () => {
        let a;
        let b;
        if (operator === 'DIVIDE') {
            while (a % b !== 0 || (a === 0 || b === 0)) {
                a = Math.floor(Math.random() * 20);
                b = Math.floor(Math.random() * 20);
            }
        }
        else {
            a = Math.floor(Math.random() * 20);
            b = Math.floor(Math.random() * 20);
        }

        const values = {
            first: a,
            second: b
        };
        setValues(values);
    }

    const calculate = (a, b) => {
        let c;

        if(operator === 'ADD') c = a + b;
        else if(operator === 'SUBSTRACT') c = a - b;
        else if(operator === 'MULTIPLY') c = a * b;
        else if(operator === 'DIVIDE') c = a / b;
        else c = null;

        return c;
    }

    return (
        <main>
            <section className="container">
                <ExampleBlock values={values} operator={operator} />

                <Answers operator={operator}
                    values={values}
                    generateValues={generateValues}
                    calculate={calculate} />
            </section>
        </main>
    )
}

export default Main;