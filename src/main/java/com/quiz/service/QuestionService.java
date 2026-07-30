package com.quiz.service;

import java.util.List;

import com.quiz.entity.Question;

public interface QuestionService {

    List<Question> getQuestionsByQuiz(Long quizId);

}