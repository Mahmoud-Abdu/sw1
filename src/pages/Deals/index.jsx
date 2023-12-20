import { Box, Typography, Button } from "@mui/material";
import React from "react";
import NavBar from "../../components/common/NavBar";

const Deals = () => {
  return (
    <section
      style={{
        background: "#C4C4C4",
        height: "661px",
        borderRadius: "0px 0px 62px 62px",
        display: "flex",
        flexDirection:"column"
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "80px 150px 100px 150px",
          gap: 5,
        }}
      >
        <Typography
          sx={{
            width: "668px",
            height: "171px",
            color: "#07484A",
            textShadow: "0px 4px 4px rgba(31, 25, 25, 0.00)",
            fontFamily: "Playfair Display",
            fontSize: "64px",
            fontFamily: "normal",
            fontWeight: 700,
            textAlign: "start",
          }}
        >
          Exclusive Deals of Furniture Collection
        </Typography>

        <Typography
          sx={{
            color: "#07484A",
            fontFamily: "Open Sans",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Explore different categories. Find the best deals.
        </Typography>

        <Button
          sx={{
            width: "230px",
            height: "80px",
            alignSelf: "start",
            background: "#70908B",
            borderRadius: "10px",
            color: "#FDFBF8",
            fontWeight: 700,
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontSize: "24px",
            textTransform: "none",
          }}
        >
          {" "}
          Shop Now
        </Button>
      </Box>
    </section>
  );
};

export default Deals;
