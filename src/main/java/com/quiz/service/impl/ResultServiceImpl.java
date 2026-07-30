package com.quiz.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.entity.Result;
import com.quiz.repository.ResultRepository;
import com.quiz.service.ResultService;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
    private ResultRepository resultRepository;

    @Override
    public Result submitQuiz(Long userId,
                             Long quizId,
                             String quizTitle,
                             int score,
                             int totalQuestions) {

        if (resultRepository.existsByUserIdAndQuizId(userId, quizId)) {

            throw new RuntimeException("Quiz already attempted");

        }

        Result result = new Result();

        result.setUserId(userId);
        result.setQuizId(quizId);
        result.setQuizTitle(quizTitle);
        result.setScore(score);
        result.setTotalQuestions(totalQuestions);
        result.setAttempted(true);

        return resultRepository.save(result);
    }

    @Override
    public Result getResult(Long userId,
                            Long quizId) {

        return resultRepository
                .findByUserIdAndQuizId(userId, quizId)
                .orElseThrow(() ->
                        new RuntimeException("Result not found"));
    }

    @Override
    public boolean hasAttempted(Long userId,
                                Long quizId) {

        return resultRepository
                .existsByUserIdAndQuizId(userId, quizId);
    }

}