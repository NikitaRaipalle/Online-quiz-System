package com.quiz.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.entity.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {

    Optional<Result> findByUserIdAndQuizId(Long userId, Long quizId);

    boolean existsByUserIdAndQuizId(Long userId, Long quizId);
}