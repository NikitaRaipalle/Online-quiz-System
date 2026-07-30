import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (loginData) => {
  const response = await axios.post(`${API_URL}/login`, loginData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const getToken = () => {
  return localStorage.getItem("token");
};

const authService = {
  register,
  login,
  logout,
  getToken,
};

export default authService;