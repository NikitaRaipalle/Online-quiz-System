package com.quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.quiz.entity.Question;
import com.quiz.service.QuestionService;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins="*")
public class QuestionController {

    @Autowired
    private QuestionService service;

    @GetMapping("/quiz/{quizId}")
    public List<Question> getQuestions(@PathVariable Long quizId){

        return service.getQuestionsByQuiz(quizId);

    }

}