import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { authHeaderStyle, authLabels, authButton } from "../../styles";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "start",
        width: "423px",
      }}
    >
      <Typography sx={authHeaderStyle}>Log in</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 1,
        }}
      >
        <Typography sx={authLabels}>Username or email address</Typography>
        <TextField sx={{ width: "90%" }} />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 1,
        }}
      >
        <Typography sx={authLabels}>Passwrod</Typography>
        <TextField type="password" sx={{ width: "90%" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Checkbox />
        <Typography sx={authLabels}>Remember me</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button onClick={()=> navigate("/home")} variant="outlined" sx={authButton}>
          Log In
        </Button>

        <Typography
          sx={{
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          Lost Your Password?
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
