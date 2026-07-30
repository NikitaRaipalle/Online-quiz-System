package com.quiz.service;

import java.util.List;

import com.quiz.entity.UserAnswer;

public interface AnswerService {

    List<UserAnswer> saveAnswers(List<UserAnswer> answers);

    List<UserAnswer> getAnswers(Long userId, Long quizId);

}