import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import authService from "../services/authService";
import "../styles/Register.css";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        fullName: "",
        email: "",
        password: ""

    });

    const handleChange = (event) => {

        setUser({

            ...user,

            [event.target.name]: event.target.value

        });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            const response = await authService.register(user);

            alert(response.message || "Registration Successful");

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-header bg-success text-white text-center">

                                <h3>Register</h3>

                            </div>

                            <div className="card-body">

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">

                                        <label>Name</label>

                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            value={user.fullName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label>Email</label>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={user.email}
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
                                            value={user.password}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success w-100"
                                    >
                                        Register
                                    </button>

                                </form>

                                <div className="text-center mt-3">

                                    <Link to="/login">

                                        Already have an account? Login

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

export default Register;