package com.quiz.service.impl;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.dto.LoginRequest;
import com.quiz.dto.RegisterRequest;
import com.quiz.entity.User;
import com.quiz.repository.UserRepository;
import com.quiz.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User register(RegisterRequest request) {

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole("USER");

        return userRepository.save(user);
    }

    @Override
    public User login(LoginRequest request) {

        Optional<User> user =
                userRepository.findByEmail(request.getEmail());

        if (user.isPresent()
                && user.get().getPassword().equals(request.getPassword())) {

            return user.get();
        }

        return null;
    }
}