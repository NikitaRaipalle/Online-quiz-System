package com.quiz.service;

import java.util.List;

import com.quiz.dto.QuizSubmission;
import com.quiz.entity.Quiz;
import com.quiz.entity.Result;

public interface QuizService {

    List<Quiz> getAllQuizzes();

    Quiz getQuizById(Long id);

    Quiz createQuiz(Quiz quiz);

    void deleteQuiz(Long id);

    Result submitQuiz(QuizSubmission submission);
}