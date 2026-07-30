import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/dashboard">

                    Online Quiz System

                </Link>

                <div className="ms-auto">

                    {
                        token ?

                            <button
                                className="btn btn-danger"
                                onClick={logout}
                            >
                                Logout
                            </button>

                            :

                            <>

                                <Link
                                    className="btn btn-outline-light me-2"
                                    to="/login"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="btn btn-warning"
                                    to="/register"
                                >
                                    Register
                                </Link>

                            </>

                    }

                </div>

            </div>

        </nav>

    );

}

export default Navbar;