import axios from "axios";

const API_URL = "http://localhost:8080/api/quizzes";

const getAllQuizzes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getQuizById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export default {
    getAllQuizzes,
    getQuizById
};