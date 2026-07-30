package com.quiz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.entity.UserAnswer;
import com.quiz.repository.UserAnswerRepository;
import com.quiz.service.UserAnswerService;

@Service
public class UserAnswerServiceImpl
        implements UserAnswerService {

    @Autowired
    private UserAnswerRepository repository;

    @Override
    public void saveAnswers(List<UserAnswer> answers) {

        repository.saveAll(answers);

    }

    @Override
    public List<UserAnswer> getAnswers(
            Long userId,
            Long quizId) {

        return repository.findByUserIdAndQuizId(
                userId,
                quizId);

    }

}