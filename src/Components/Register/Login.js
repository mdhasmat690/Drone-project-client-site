import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useAuth from "../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginn,handleLogin, loginerror,handlegooglesignin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation()
  const navigate = useNavigate()
  const redirect = location.state?.form || '/home'

  const handleLoginClick = (e) => {
    e.preventDefault();
    handleLogin(email, password,location,navigate);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const googleLogin = () =>{
    handlegooglesignin()
    .then((result) => {
      navigate(redirect)
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
  }

  
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
            <form onClick={handleLoginClick}>
              <TextField
                onBlur={handleEmail}
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                required
                label="Required"
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
              <Button type="button" variant="contained">
                Login
              </Button>
            </form>

            <div>---------------------------</div>
            <div>
              If you're new please <Link to="/register">Register</Link>
            </div>

            <div>--------</div>
            <Button onClick={googleLogin} variant="contained">
              Google sign In
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
