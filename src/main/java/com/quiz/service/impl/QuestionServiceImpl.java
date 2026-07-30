package com.quiz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.entity.Question;
import com.quiz.repository.QuestionRepository;
import com.quiz.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository repository;

    @Override
    public List<Question> getQuestionsByQuiz(Long quizId) {

        return repository.findByQuizId(quizId);

    }

}