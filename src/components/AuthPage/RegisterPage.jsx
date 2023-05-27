import React, { useState } from "react";
import "./LoginPage.css";
import Box from "@mui/material/Box";
import { useAuth } from "../../context/AuthContext";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

const RegisterPage = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
 
  const handleRegister = async () => {
    await register(email, password, userName);
  };
  return (
    <div>
      <BoxSx>
        <Paper elevation={3} sx={{}} className="LogInBox">
          <TextField
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            defaultValue={email}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            defaultValue={password}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value)
            }}
          />

          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </Paper>
      </BoxSx>
    </div>
  );
};

export default RegisterPage;
