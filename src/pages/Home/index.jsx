import React from "react";
import Deals from "../Deals";
import Category from "../Category";
import { Box } from "@mui/material";
import PopularProducts from "../PopularProducts";
import SpecialPackages from "../SpecialPackages";
const Home = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Deals />
      <Category />
      <PopularProducts />
      <SpecialPackages />
    </Box>
  );
};

export default Home;
