import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/quiz/:id" element={<Quiz />} />

      <Route path="/result" element={<Result />} />

      <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />

      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;