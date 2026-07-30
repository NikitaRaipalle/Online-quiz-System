package com.quiz.service;

import java.util.List;

import com.quiz.entity.UserAnswer;

public interface UserAnswerService {

    void saveAnswers(List<UserAnswer> answers);

    List<UserAnswer> getAnswers(
            Long userId,
            Long quizId);

}