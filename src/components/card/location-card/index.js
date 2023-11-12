import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setIslocation, setlocation } from "../../../store/locations";

const LocationCard = ({ setIsShowLocationDeatils, deatils }) => {
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "20px",
        marginLeft: "20px",
        boxShadow: "3px 4px 10px -4px rgba(0,0,0,.35)",
        padding: ".5rem .8rem",
      }}
      onClick={() => {
        setIsShowLocationDeatils(false)
        dispatch(setlocation(deatils))
        dispatch(setIslocation(true))
      }}
    >
      <Box>
        <LocationOnIcon />
      </Box>
      <Box sx={{ textAlign: "left", marginTop: "20px" }}>
        <Typography variant="h4" sx={{ fontSize: "1.1rem" , margin: "5px 0px"}}>
          {deatils?.address?.split(",")[0]}
        </Typography>
        <Typography variant="h5" sx={{fontSize: "16px"}}> {deatils?.address}</Typography>
        <Typography variant="body1" sx={{fontSize: "14px", margin: "7px 0px"}}>
          <span
            style={{
              backgroundColor: "rgba(69, 79, 99, 0.08)",
              padding: "0px 3px",
              color: "#4c5976",
            }}
          >
            Thana:
          </span>{" "}
          {deatils?.area},{" "}
          <span
            style={{
              backgroundColor: "rgba(69, 79, 99, 0.08)",
              padding: "0px 3px",
              color: "#4c5976",
            }}
          >
            District:
          </span>{" "}
          {deatils?.city}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            backgroundColor: "rgba(69,79,99,.0784313725490196)",
            borderRadius: "4px",
            width: "max-content",
            padding: "2px 4px",
            fontSize: "12px"
          }}
        >
          {deatils?.pType}
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationCard;
