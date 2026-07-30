package com.quiz.dto;

public class QuizSubmission {

    private String username;
    private String quizTitle;
    private int score;
    private int totalQuestions;

    public QuizSubmission() {
    }

    public QuizSubmission(String username, String quizTitle, int score, int totalQuestions) {
        this.username = username;
        this.quizTitle = quizTitle;
        this.score = score;
        this.totalQuestions = totalQuestions;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getQuizTitle() {
        return quizTitle;
    }

    public void setQuizTitle(String quizTitle) {
        this.quizTitle = quizTitle;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(int totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

}