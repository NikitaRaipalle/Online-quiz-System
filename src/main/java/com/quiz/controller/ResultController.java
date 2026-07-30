package com.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.quiz.entity.Result;
import com.quiz.service.ResultService;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = {
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3004"
})
public class ResultController {

    @Autowired
    private ResultService resultService;

    // Submit Quiz Result
    @PostMapping("/submit")
    public ResponseEntity<?> submitQuiz(

            @RequestParam Long userId,

            @RequestParam Long quizId,

            @RequestParam String quizTitle,

            @RequestParam int score,

            @RequestParam int totalQuestions) {

        try {

            Result result = resultService.submitQuiz(

                    userId,
                    quizId,
                    quizTitle,
                    score,
                    totalQuestions);

            return new ResponseEntity<>(result, HttpStatus.CREATED);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());

        }
    }

    // Get Result By User Id
    @GetMapping
    public ResponseEntity<?> getResult(

            @RequestParam Long userId,

            @RequestParam Long quizId) {

        try {

            Result result =
                    resultService.getResult(
                            userId,
                            quizId);

            return ResponseEntity.ok(result);

        }

        catch (RuntimeException e) {

            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());

        }

    }

    // Check User Attempted Quiz
    @GetMapping("/check")
    public ResponseEntity<Boolean> checkAttempt(

            @RequestParam Long userId,

            @RequestParam Long quizId) {

        return ResponseEntity.ok(

                resultService.hasAttempted(
                        userId,
                        quizId));

    }

}