import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, FormControlLabel, Link } from "@mui/material";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ColorModeContext } from "../../theme";
import LocationCard from "../card/location-card/index";
import LocationDetails from "../card/location-deatils/index";
import SwitchButton from "../card/switch-button";
import Search from "../search";

const SideBar = ({ setSidebar, sidebar }) => {
  const [isShowLocationDeatils, setIsShowLocationDeatils] = useState(true);
  const colorMode = useContext(ColorModeContext);
  const placeData = useSelector((state) => state.locations?.locations?.places);

  return (
    <Box>
      {sidebar && (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 30px",
              margin: "15px",
            }}
          >
            <Link
              href="/"
              sx={{
                fontSize: "24px",
                color: "#4c5976",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              <span>Bari</span>
              <span style={{ color: "#2ddbac" }}>Koi</span>
            </Link>
            <FormControlLabel
              control={<SwitchButton  />}        
              onClick={colorMode.toggleColorMode}
            />

            <p onClick={() => setSidebar(false)}>
              <ArrowBackIcon sx={{cursor: "pointer" }} />
            </p>
          </Box>
          <Box>
            <Search setIsShowLocationDeatils={setIsShowLocationDeatils} />
            {isShowLocationDeatils ? (
              <Box
                sx={{
                  margin: "0px 20px",
                  height: "450px",
                  overflowY: `${placeData?.length >= 0 ? "scroll" : "hidden"}`,
                }}
              >
                {placeData?.map((item, index) => (
                  <LocationCard
                    setIsShowLocationDeatils={setIsShowLocationDeatils}
                    deatils={item}
                    key={index}
                  />
                ))}
              </Box>
            ) : (
              <Box sx={{ margin: "0px 20px" }}>
                <LocationDetails />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
