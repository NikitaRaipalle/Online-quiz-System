import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import authService from "../services/authService";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {

        setLoginData({

            ...loginData,

            [event.target.name]: event.target.value

        });

    };

    // Replace only this method
    const handleSubmit = async (event) => {

    event.preventDefault();

    try {

        // Login API
        const data = await authService.login(loginData);

        console.log("Login Response:", data);

        // Save logged in user
        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );

        // Save JWT token
        localStorage.setItem(
            "token",
            data.token
        );

        alert("Login Successful");

        // Check whether the user has already attempted the quiz
        if (data.attempted) {

            navigate("/result");

        } else {

            navigate("/dashboard");

        }

    } catch (error) {

        console.log(error);

        alert("Invalid Email or Password");

    }

};

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white text-center">

                                <h3>Login</h3>

                            </div>

                            <div className="card-body">

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">

                                        <label>Email</label>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={loginData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label>Password</label>

                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={loginData.password}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Login
                                    </button>

                                </form>

                                <div className="text-center mt-3">

                                    <Link to="/register">

                                        New User? Register

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Login;