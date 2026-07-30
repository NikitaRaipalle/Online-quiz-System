import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import quizService from "../services/quizService";



function Quiz() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [quiz, setQuiz] = useState(null);

    const [answers, setAnswers] = useState({});

    const QUIZ_TIME = 600; // 10 minutes = 600 seconds

const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);

    useEffect(() => {

    checkQuizAttempt();

}, []);

useEffect(() => {

    if (!quiz) return;

    const timer = setInterval(() => {

        setTimeLeft((prev) => {

            if (prev <= 1) {

                clearInterval(timer);

                submitQuiz();

                return 0;
            }

            return prev - 1;

        });

    }, 1000);

    return () => clearInterval(timer);

}, [quiz]);
    const loadQuiz = async () => {

        try {

            const response = await quizService.getQuizById(id);

            console.log("Quiz Response:", response);

            setQuiz(response);

        }

        catch (error) {

            console.log(error);

        }

    };

    const selectAnswer = (questionId, answer) => {

        setAnswers({

            ...answers,

            [questionId]: answer

        });

    };
    const checkQuizAttempt = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

        navigate("/login");

        return;

    }

    try {

        const check = await fetch(

            "http://localhost:8080/api/results/check?userId="
            + user.id +
            "&quizId=" +
            id

        );

        const attempted = await check.json();

        if (attempted) {

            const response = await fetch(

                "http://localhost:8080/api/results?userId="
                + user.id +
                "&quizId=" +
                id

            );

            const result = await response.json();

            const answerResponse = await fetch(

    "http://localhost:8080/api/answers?userId="
    + user.id +
    "&quizId=" +
    id

);

if (!answerResponse.ok) {

    console.log("Unable to fetch answers");

    return;

}

const answerList = await answerResponse.json();

console.log(answerList);

if (!Array.isArray(answerList)) {

    console.log("Backend did not return an array");

    return;

}

const answerMap = {};

answerList.forEach(answer => {

    answerMap[answer.questionId] = answer.selectedAnswer;

});

            const quizResponse =
                await quizService.getQuizById(id);

            navigate("/result", {

                state: {

                    result: {

                        ...result,

                        username: user.fullName

                    },

                    quiz: quizResponse,

                    answers: answerMap

                }

            });

            return;

        }

        loadQuiz();

    }

    catch(error){

        console.log(error);

    }

};
const formatTime = (seconds) => {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

};

    const submitQuiz = async () => {

    // Check quiz loaded
    if (!quiz || !quiz.questions) {

        alert("Quiz not loaded.");

        return;
    }

    // Get logged in user
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("User from localStorage:", user);

    // Check user available
    if (!user) {

        alert("User not found. Please login again.");

        navigate("/login");

        return;
    }

    let score = 0;

    quiz.questions.forEach(question => {

        if (answers[question.id] === question.correctAnswer) {

            score++;

        }

    });

    const result = {

    userId: user.id,

    quizId: quiz.id,

    username: user.fullName,

    quizTitle: quiz.title,

    score: score,

    totalQuestions: quiz.questions.length

};

    try {

       const response = await fetch(

"http://localhost:8080/api/results/submit?userId="
+result.userId+
"&quizId="
+result.quizId+
"&quizTitle="
+encodeURIComponent(result.quizTitle)+
"&score="
+result.score+
"&totalQuestions="
+result.totalQuestions,

{
    method:"POST"
}

);

        if (!response.ok) {

            const message = await response.text();

            alert(message);

            return;

        }
        const userAnswers = quiz.questions.map(question => ({

    userId: user.id,

    quizId: quiz.id,

    questionId: question.id,

    selectedAnswer: answers[question.id]

}));

await fetch(

    "http://localhost:8080/api/answers/save",

    {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(userAnswers)

    }

);

        navigate("/result", {

            state: {

                result: result,

                quiz: quiz,

                answers: answers

            }

        });

    } catch (error) {

        console.log(error);

        alert("Something went wrong.");

    }

};

    if (!quiz || !quiz.questions) {
    return <h3 className="text-center mt-5">Loading...</h3>;
}

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <h2 className="text-center">

                    {quiz.title}

                </h2>

                <p className="text-center">

                    {quiz.description}

                </p>
                <h3
    className="text-center text-danger mb-4"
>
    Time Left : {formatTime(timeLeft)}
</h3>

                {

                    quiz.questions.map((question, index) => (

                        <div

                            className="card mb-4"

                            key={question.id}

                        >

                            <div className="card-body">

                                <h4>

                                    {index + 1}. {question.questionText}

                                </h4>

                                {

                                    [

                                        question.optionA,

                                        question.optionB,

                                        question.optionC,

                                        question.optionD

                                    ].map(option => (

                                        <div
                                            className="form-check"
                                            key={option}
                                        >

                                            <input

                                                type="radio"

                                                className="form-check-input"

                                                name={question.id}

                                                value={option}

                                                checked={answers[question.id] === option}

                                                onChange={() =>

                                                    selectAnswer(question.id, option)

                                                }

                                            />

                                            <label className="form-check-label">

                                                {option}

                                            </label>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

                <div className="text-center mb-5">

                    <button

                        className="btn btn-success btn-lg"

                        onClick={submitQuiz}

                    >

                        Submit Quiz

                    </button>

                </div>

            </div>

        </>

    );

}

export default Quiz;