import React from "react";

const AnswerCard = ({ answer, onCheckAnswer }) => {
    return (
        <div className="card" onClick={() => onCheckAnswer(answer)}>
            <p>{answer}</p>
        </div>
    )
}

export default AnswerCard;