package com.quiz.service;

import com.quiz.entity.Result;

public interface ResultService {

    Result submitQuiz(Long userId,
                      Long quizId,
                      String quizTitle,
                      int score,
                      int totalQuestions);

    Result getResult(Long userId,
                     Long quizId);

    boolean hasAttempted(Long userId,
                         Long quizId);

}