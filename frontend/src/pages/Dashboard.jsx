import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";
import quizService from "../services/quizService";

function Dashboard() {

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {

        loadQuizzes();

    }, []);

    const loadQuizzes = async () => {
    try {

        const data = await quizService.getAllQuizzes();

        console.log("API Response:", data);
        console.log("Is Array:", Array.isArray(data));

        setQuizzes(data);

    } catch (error) {
        console.log(error);
    }
};

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <h2 className="text-center mb-5">

                    Available Quizzes

                </h2>

                <div className="row">

                    {

                        quizzes.map((quiz) => (

                            <QuizCard
                                key={quiz.id}
                                quiz={quiz}
                            />

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default Dashboard;