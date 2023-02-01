import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #7525ff",
            marginTop: "10px",
            background: "#EADEFF",
            borderRadius: "75px",
            width: "225px",
            height: "200px",
            cursor: "pointer",
            gap: "45px",
          }
        : {
            background: "#EADEFF",
            borderRadius: "75px",
            width: "225px",
            height: "200px",
            cursor: "pointer",
            gap: "45px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Poppins"
      color="#230556"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
