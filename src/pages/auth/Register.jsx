import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { authHeaderStyle, authLabels } from "../../styles";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4.25,
        alignItems: "start",
        width: "423px",
      }}
    >
      <Typography sx={authHeaderStyle}>Register</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 1,
        }}
      >
        <Typography sx={authLabels}>Email address</Typography>
        <TextField sx={{ width: "90%" }} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ display: "block", textAlign: "start" }}>
          A link to set a new password will be sent to your email address.
        </Typography>

        <Typography sx={{ display: "block", textAlign: "start" }}>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <strong>privacy policy </strong> .
        </Typography>
      </Box>

      <Button
        variant="outlined"
        sx={{
          width: "215px",
          height: "64px",
          borderRadius: "15px",
          border: "1px solid #000",
          fontSize: "20px",
          color: "#000",
          fontFamily: "Poppins",
          fontWeight: 400,
          textTransform: "none",
          mt:0.5
        }}
        onClick={() => navigate("/home")}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;
