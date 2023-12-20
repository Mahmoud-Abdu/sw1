import React from "react";
import { Typography } from "@mui/material";
const CategoryTypography = ({ title }) => {
  return (
    <Typography
      sx={{
        color: "#07484A",
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 400,
      }}
    >
      {title}
    </Typography>
  );
};

export default CategoryTypography;
