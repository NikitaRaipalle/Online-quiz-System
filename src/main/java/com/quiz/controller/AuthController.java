package com.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.quiz.dto.LoginRequest;
import com.quiz.dto.LoginResponse;
import com.quiz.dto.RegisterRequest;
import com.quiz.entity.User;
import com.quiz.service.AuthService;
import com.quiz.service.ResultService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3004"
})
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ResultService resultService;

    // ==========================
    // Register User
    // ==========================
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {

        User user = authService.register(request);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    // ==========================
    // Login User
    // ==========================
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {

        User user = authService.login(request);

        if (user == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid Email or Password");
        }

        

        // If you implement JWT later, replace this value
        String token = "";

        LoginResponse response = new LoginResponse();

        response.setToken(token);
        response.setUserId(user.getId());
        response.setUsername(user.getFullName());
        response.setEmail(user.getEmail());
        response.setUser(user);
        response.setAttempted(false);

        return ResponseEntity.ok(response);

        
    }
}