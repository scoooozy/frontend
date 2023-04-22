import React, { useState } from "react";
import "./LoginPage.css";
import Box from "@mui/material/Box";
import { useAuth } from "../../context/AuthContext";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function BoxSx(props) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.dark",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </Box>
  );
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login, register, user, logout } = useAuth();

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {})
      .finally(() => {});
  };

  const handleRegister = async () => {
    await register("spoopyyy19@gmail.com", "qwerty", "Aboba");
  };
  return (
    <div>
      <BoxSx>
        <Paper elevation={3} sx={{}} className="LogInBox">
          <TextField
            size="small"
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />

          <Button variant="contained" onClick={handleLogin}>
            Log In
          </Button>

          <p className="registerText">
            Don't have an acoount? Click here to{" "}
            <button className="registerButton" onClick={handleRegister}>
              register
            </button>
          </p>
        </Paper>
      </BoxSx>
    </div>
  );
};

export default LoginPage;
