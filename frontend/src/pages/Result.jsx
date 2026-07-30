import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";

function Result() {

    const location = useLocation();

    // Debug
    console.log("Location =", location);
    console.log("Location State =", location.state);

    if (!location.state) {
        return <Navigate to="/dashboard" />;
    }

    const result = location.state.result;
    const quiz = location.state.quiz;
    const answers = location.state.answers;

    // More Debug
    console.log("Result =", result);
    console.log("Quiz =", quiz);
    console.log("Answers =", answers);

    if (!result || !quiz || !answers) {
        return (
            <div className="container mt-5">
                <h3>Result data not found.</h3>
                <Link to="/dashboard" className="btn btn-primary">
                    Back
                </Link>
            </div>
        );
    }

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="text-center">
                        Quiz Completed
                    </h2>

                    <hr />

                    <h4>User : {result.username}</h4>

                    <h4>Quiz : {result.quizTitle}</h4>

                    <h4>
                        Score : {result.score} / {result.totalQuestions}
                    </h4>

                    <hr />

                    <h3>Answer Review</h3>

                    {
                        quiz.questions.map((q, index) => {

                            const selected = answers[q.id];

                            const correct = selected === q.correctAnswer;

                            return (

                                <div
                                    className="card mt-3"
                                    key={q.id}
                                >

                                    <div className="card-body">

                                        <h5>
                                            {index + 1}. {q.questionText}
                                        </h5>

                                        <p>
                                            <b>Your Answer : </b>

                                            <span
                                                style={{
                                                    color: correct ? "green" : "red"
                                                }}
                                            >
                                                {selected || "Not Answered"}
                                            </span>

                                        </p>

                                        <p>

                                            <b>Correct Answer : </b>

                                            <span style={{ color: "green" }}>
                                                {q.correctAnswer}
                                            </span>

                                        </p>

                                    </div>

                                </div>

                            );

                        })

                    }

                    <div className="text-center mt-4">

                        <Link
                            className="btn btn-primary"
                            to="/dashboard"
                        >
                            ← Back to Quiz List
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Result;