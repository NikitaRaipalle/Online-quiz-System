package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.entity.UserAnswer;

public interface UserAnswerRepository
        extends JpaRepository<UserAnswer, Long> {

    List<UserAnswer> findByUserIdAndQuizId(
            Long userId,
            Long quizId);
}