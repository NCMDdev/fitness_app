import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#7525FF" fontWeight="600" fontSize="40px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px", color: "#230556" } }}
      mb="23px"
      mt="30px"
    >
      Every day is a chance <br />
      to become better.
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="Poppins"
      lineHeight="35px"
      sx={{ color: "#230556" }}
    >
      Check out the exercises and personalize <br />
      your training
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#7525FF",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "15px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#7525FF"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{ borderBottomLeftRadius: "75px" }}
    />
  </Box>
);

export default HeroBanner;
