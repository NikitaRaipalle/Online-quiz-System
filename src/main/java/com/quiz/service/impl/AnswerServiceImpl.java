package com.quiz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.entity.UserAnswer;
import com.quiz.repository.UserAnswerRepository;
import com.quiz.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private UserAnswerRepository userAnswerRepository;

    @Override
    public List<UserAnswer> saveAnswers(List<UserAnswer> answers) {

        return userAnswerRepository.saveAll(answers);

    }

    @Override
    public List<UserAnswer> getAnswers(Long userId, Long quizId) {

        return userAnswerRepository.findByUserIdAndQuizId(userId, quizId);

    }

}