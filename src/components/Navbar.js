import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "100px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: "64px", height: "64px" }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Poppins"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#230556",
          borderBottom: "3px solid #7525FF",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#230556" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
