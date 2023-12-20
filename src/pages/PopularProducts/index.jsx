import React from "react";
import { Box, Typography, Button } from "@mui/material";
const PopularProducts = () => {
  return (
    <section
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        height: "1251px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
          //   backgroundImage: `url(/assets/chair2.png)`,
          //   backgroundSize:"cover",
          //   backgroundPosition:"center",
          //   width:"100%",
          //   height:"200px"
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
          Popular Products
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Box
            sx={{
              display: "flex",
              width: "416px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              borderRadius: "16px",
              background: "#CAF3E5",
              height: "585px",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <img src="/assets/chair1.png" width="204px" height="270px" alt="" />
            <Box
              sx={{
                width: "336px",
                height: "131px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#70908B",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                Armchair
              </Typography>

              <Typography
                sx={{
                  color: "#70908B",
                  fontFamily: "Open Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                single chair
              </Typography>

              <Typography
                sx={{
                  color: "#70908B",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                $ 145
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "416px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              borderRadius: "16px",
              background: "#E0EFF6",
              height: "585px",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <img src="/assets/chair2.png" width="204px" height="270px" alt="" />
            <Box
              sx={{
                width: "336px",
                height: "131px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#70908B",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                Armchair
              </Typography>

              <Typography
                sx={{
                  color: "#70908B",
                  fontFamily: "Open Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                single chair
              </Typography>

              <Typography
                sx={{
                  color: "#70908B",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                $ 145
              </Typography>
            </Box>
          </Box>
        
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
              textTransform: "none",
              "&:hover": {
                background: "#627e7a",
              },
            }}
          >
          Explore all items
          </Button>
      </Box>
    </section>
  );
};

export default PopularProducts;
