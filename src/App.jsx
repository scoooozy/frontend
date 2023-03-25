import React from "react";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { login, register, user, logout } = useAuth();

  const handleLogin = () => {
    login("spoopy@gmail.com", "qwerty");
  };

  const handleRegister = async () => {
    await register("spoopyyy11@gmail.com", "qwerty", "Aboba");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
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