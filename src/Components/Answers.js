import React, { useState, useEffect } from "react";
import AnswerCard from "./AnswerCard";

const Answers = ({ operator, values, generateValues, calculate }) => {
    const [answers, setAnswers] = useState([]);

    const shuffle = answers => {
        for (let i = 0; i < answers.length * 10; i++) {
            let indexFirst = Math.floor(Math.random() * answers.length);
            let indexSecond = Math.floor(Math.random() * answers.length);

            [answers[indexFirst], answers[indexSecond]] = [answers[indexSecond], answers[indexFirst]];
        }

        return answers;
    }

    const generateAnswersBefore = () => {
        let trueAnswer;
        if (operator === 'ADD') trueAnswer = values.first + values.second;
        else if (operator === 'SUBSTRACT') trueAnswer = values.first - values.second;
        else if (operator === 'MULTIPLY') trueAnswer = values.first * values.second;
        else if (operator === 'DIVIDE') trueAnswer = values.first / values.second;
        else trueAnswer = null;

        let firstAnswer;
        let secondAnswer;
        do {
            firstAnswer = Math.floor(Math.random() * 20);
            secondAnswer = Math.floor(Math.random() * 20);
        } while ((firstAnswer === trueAnswer || secondAnswer === trueAnswer) || firstAnswer === secondAnswer)

        const result = [firstAnswer, secondAnswer, trueAnswer];
        return result;
    }

    useEffect(() => {
        const answers = generateAnswersBefore();
        shuffle(answers);
        setAnswers(answers);
    }, [operator, values]);

    const checkAnswer = answer => {
        answer === calculate(values.first, values.second) ?
            generateValues() :
            alert('False!');
    }

    return (
        <div className="answers">
            {answers.map((a, i) => <AnswerCard key={i}
                answer={a}
                onCheckAnswer={checkAnswer}
            />)}
        </div>
    )
}

export default Answers