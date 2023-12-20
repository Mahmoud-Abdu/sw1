import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "../../components/common/NavBar";
import Register from "./Register";
import Login from "./Login";
const Auth = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", gap:15 }}>
      <NavBar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ display: "flex", width: "80%", justifyContent: "space-around" }}
        >
          <Login />
          <Register />
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;
