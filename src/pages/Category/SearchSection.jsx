import React from "react";
import { Box, TextField, Button } from "@mui/material";
import CategoryTypography from "./CategoryTypography";
import InputAdornment from "@mui/material/InputAdornment";

const SearchSection = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        sx={{ height: "81px", width: "463px" }}
        label="Search"
        inputProps={{
          start: (
            <InputAdornment position="start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M10.389 19.278C15.2982 19.278 19.278 15.2982 19.278 10.389C19.278 5.47973 15.2982 1.5 10.389 1.5C5.47973 1.5 1.5 5.47973 1.5 10.389C1.5 15.2982 5.47973 19.278 10.389 19.278Z"
                  stroke="#6E757E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.4999 21.4999L16.6665 16.6665"
                  stroke="#6E757E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{
          width: "651px",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CategoryTypography title="Bedroom" />
        <CategoryTypography title="Dinning Room" />
        <CategoryTypography title="Meeting Room" />
        <CategoryTypography title="Workspace" />
      </Box>

      <Box
        sx={{
          width: "500px",
          height: "136px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CategoryTypography title="Living Room" />
        <CategoryTypography title="Room Kitchen" />
        <CategoryTypography title="Living Space" />
      </Box>

      <Button
        sx={{
          width: "265px",
          height: "89px",
          background: "#70908B",
          borderRadius: "10px",
          color: "#FFF",
          fontFamily: "Open Sans",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 700,
          textTransform:"none",
          "&:hover":{
            background:"#627e7a"
          }
        }}
      >
        All Categories
      </Button>
    </Box>
  );
};

export default SearchSection;
