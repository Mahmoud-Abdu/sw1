import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Card from "./Card";
const CardsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "950px",
        height: "277px",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      <Card title="Bedroom" />
      <Card title="Dinning Room" />
      <Card title="Meeting Room" />
      <Card title="Workspace" />
      <Card title="Living Room" />
      <Card title="Kitchen Room" />
    </Box>
  );
};

export default CardsSection;
