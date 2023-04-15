import React from "react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
const App = () => {
  const { login, register, user, logout } = useAuth();

  const handleLogin = () => {
    login("spoopyyy19@gmail.com", "qwerty");
  };

  const handleRegister = async () => {
    await register("spoopyyy19@gmail.com", "qwerty", "Aboba");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar/>
      {!user ? (
        <div>
          <button onClick={handleLogin}>login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      ) : (
        <div className="">
          <h1>HALLLOOOOO, {user.displayName}</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default App;