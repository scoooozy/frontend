import React from 'react'
import "./LoginPage.css";
import Box from "@mui/material/Box";
import { useAuth } from "../../context/AuthContext";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

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
  const {register } = useAuth();



  const handleRegister = async () => {
    await register("spoopyyy19@gmail.com", "qwerty", "Aboba");
  };
  return (
    <div>
      <BoxSx>
        <Paper elevation={3} sx={{}} className="LogInBox">
        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" />
          <TextField size="small" id="outlined-basic" label="Password" variant="outlined" />
          <TextField size="small" id="outlined-basic" label="Username" variant="outlined" />
        

          <Button
            variant="contained"
            onClick={handleRegister}
          >
            Register
          </Button>

        </Paper>
      </BoxSx>
    </div>
  );
};

export default RegisterPage