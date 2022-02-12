import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useAuth from "../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister, loginn, loginerror } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    handleRegister(email, password, name, location, navigate);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center", mx: "auto" }}
        >
          <Grid item xs={12} md={7} sx={{ mt: 10 }}>
            <img
              className="w-50"
              src="https://i.ibb.co/wNxmmj0/4912309.jpg"
              alt=""
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <form onClick={handlesubmit}>
              <TextField
                onBlur={handleName}
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                required
                label="Required"
                label="Name"
                variant="standard"
                color="warning"
              />
              <br />
              <TextField
                onBlur={handleEmail}
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                required
                label="Email"
                label="Email"
                variant="standard"
              />
              <br />
              <TextField
                onBlur={handlePass}
                sx={{ width: "50%", m: 1 }}
                id="standard-password-input"
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <br />
              <div style={{ color: "red" }}>{loginerror}</div>
              <br />
              {/* <button type="submit">dsfasdff</button> */}
              <Button variant="contained">Contained</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
