import React from "react";
import { Box, Typography, Button } from "@mui/material";
const Card = ({ title }) => {
  return (
    <Box sx={{ display: "flex", width: "462px", height: "277px" }}>
      <Box
        sx={{
          display: "flex",
          width: "462.5px",
          height: "277px",
          background: title !== "Bedroom" ? "#D9D9D9" : "#ADADAD",
          borderRadius: "10px",
          boxShadow: " 0px 4px 50px 0px rgba(0, 0, 0, 0.15)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            color: "#FDFBF8",
            fontFamily: "Playfair Display",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>

        {title === "Bedroom" && (
          <Button
            sx={{
              width: "150px",
              display: "flex",
              padding: "14px 20px",
              justifyContent: "center",
              background: "#E0EFF6",
              borderRadius: "6px",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "none",
            }}
          >
            Explore
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Card;
