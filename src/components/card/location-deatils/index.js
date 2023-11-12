import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const LocationDetails = () => {
  const placeDeatils = useSelector((state) => state?.locations?.location);
  return (
    <Box
      sx={{
        marginLeft: "20px",
        boxShadow: "3px 4px 10px -4px rgba(0,0,0,.35)",
        padding: ".5rem .8rem",
      }}
    >
      <Box sx={{ textAlign: "left", marginTop: "20px" }}>
        <Typography variant="h4" sx={{ fontSize: "14px" }}>
          <span
            style={{
              backgroundColor: "rgba(69, 79, 99, 0.08)",
              padding: "5px 6px",
              color: "#4c5976",
              borderRadius: "5px",
            }}
          >
            Address:
          </span>{" "}
          {placeDeatils?.address}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "14px", margin: "20px 0px" }}>
          <span
            style={{
              backgroundColor: "rgba(69, 79, 99, 0.08)",
              padding: "5px 6px",
              color: "#4c5976",
              borderRadius: "5px",
            }}
          >
            Place Type property
          </span> {" "}
          {placeDeatils?.pType}
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationDetails;
