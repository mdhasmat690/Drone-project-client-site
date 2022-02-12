


import { Alert, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleChange = (val) => {
    setEmail(val);
  };

  const handleSubmit = (e) => {
    const user = { email };
    console.log(email, "submit");
    fetch("https://hidden-fjord-28330.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
          setPopup(true);
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="mt-5">
      <h2>Added a Admin</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e.target.value)}
          variant="outlined"
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {popup && <Alert severity="success">Add Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;













