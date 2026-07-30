import React from "react";
import { useNavigate } from "react-router-dom";

function QuizCard({ quiz }) {

    const navigate = useNavigate();

    const startQuiz = () => {
        navigate(`/quiz/${quiz.id}`);
    };

    return (

        <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

                <div className="card-body">

                    <h4>{quiz.title}</h4>

                    <p>{quiz.description}</p>

                    <button
                        className="btn btn-primary"
                        onClick={startQuiz}
                    >
                        Start Quiz
                    </button>

                </div>

            </div>

        </div>

    );

}

export default QuizCard;