package com.quiz.dto;

import com.quiz.entity.User;

public class LoginResponse {

    private String token;
    private Long userId;
    private String username;
    private String email;
    private User user;
    private boolean attempted;

    public LoginResponse() {
    }

    public LoginResponse(String token,
            Long userId,
            String username,
            String email,
            User user,
            boolean attempted) {

this.token = token;
this.userId = userId;
this.username = username;
this.email = email;
this.user = user;
this.attempted = attempted;
}

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isAttempted() {
        return attempted;
    }

    public void setAttempted(boolean attempted) {
        this.attempted = attempted;
    }

}