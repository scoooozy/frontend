import React from "react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LoginPage from "./components/AuthPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import RegisterPage from "./components/AuthPage/RegisterPage";
const App = () => {

  return (
    <div>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage/>} path="/register" />
        <Route element={<MainPage/> } path="/" />
      </Routes>
    </div>
  );
};

export default App;
