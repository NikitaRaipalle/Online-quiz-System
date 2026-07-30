package com.quiz.service;

import com.quiz.dto.LoginRequest;
import com.quiz.dto.RegisterRequest;
import com.quiz.entity.User;

public interface AuthService {

    User register(RegisterRequest request);

    User login(LoginRequest request);

}