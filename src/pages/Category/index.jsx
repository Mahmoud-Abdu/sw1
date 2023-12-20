import React from "react";
import { Box, Typography } from "@mui/material";
import SearchSection from "./SearchSection";
import CardsSection from "./CardsSection";
const Category = () => {
  return (
    <section style={{ marginTop: "20px", display:"flex", flexDirection:"column",height:"1660px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems:"center",
        }}
      >
        <Typography
          sx={{
            color: "#07484A",
            fontFamily: "Playfair Display",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Explore by Category
        </Typography>

        <SearchSection />
        <CardsSection />
      </Box>
    </section>
  );
};

export default Category;
