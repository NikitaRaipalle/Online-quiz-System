package com.quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.quiz.entity.UserAnswer;
import com.quiz.service.AnswerService;

@RestController
@RequestMapping("/api/answers")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:3004"
})
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @PostMapping("/save")
    public ResponseEntity<List<UserAnswer>> saveAnswers(

            @RequestBody List<UserAnswer> answers) {

        return ResponseEntity.ok(

                answerService.saveAnswers(answers));

    }

    @GetMapping
    public ResponseEntity<List<UserAnswer>> getAnswers(

            @RequestParam Long userId,

            @RequestParam Long quizId) {

        return ResponseEntity.ok(

                answerService.getAnswers(userId, quizId));

    }

}