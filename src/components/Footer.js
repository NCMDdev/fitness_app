import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#F7F3FE">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "300px", height: "70px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "14px", xs: "8px" } }}
      mt="20px"
      textAlign="center"
      pb="10px"
    >
      Created by <a href="https://www.ncmd.dev">NCMD.dev</a>
    </Typography>
  </Box>
);

export default Footer;
