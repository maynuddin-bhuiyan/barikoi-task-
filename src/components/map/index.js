import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
// import { Asset } from "expo-asset";
import L from "leaflet";
import React, { useEffect, useRef, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useSelector } from "react-redux";

// Create an custom icon
const blueIcon = new L.Icon({
  iconUrl: "/assets/img/blue.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const greenIcon = new L.Icon({
  iconUrl: "/assets/img/green.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const redIcon = new L.Icon({
  iconUrl: "/assets/img/red.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Leaflet = ({ setSidebar, sidebar }) => {
  const { locations, location, isLocation } = useSelector(
    (state) => state.locations
  );
  const mapContainer = useRef();
  const position = [51.505, -0.09];

  console.log(location, isLocation);

  //  console.log(locations?.places)

  const [selectPosition, setSelectPosition] = useState([
    {
      lat: position[0],
      lng: position[1],
    },
  ]);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : "";
  }

  useEffect(() => {
    // Map data to create an array with latitude and longitude
    if (locations) {
      setSelectPosition((prev) => {
        const mappedCoordinates = locations?.places?.map((location) => ({
          ...location,
          position: [location.latitude, location.longitude],
        }));

        return mappedCoordinates;
      });

      window.document.getElementById("mapContainer").click();
    }
    if (location && isLocation) {
      setSelectPosition([
        {
          ...location,
          position: [location.latitude, location.longitude],
        },
      ]);
      window.document.getElementById("mapContainer").click();
    }
  }, [locations, location, isLocation, window]);

  return (
    <Box sx={{ width: "100%" }}>
      {!sidebar && (
        <ArrowForwardIcon
          sx={{ marginLeft: "20px", marginTop: "20px", cursor: "pointer" }}
          onClick={() => setSidebar(true)}
        />
      )}
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={true}
        ref={mapContainer}
        id="mapContainer"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {placeData?.map(())} */}
        {selectPosition?.map((item, i) => {
          return (
            <Marker
              position={item?.position ? item?.position : item}
              icon={
                item?.pType === "Admin"
                  ? greenIcon
                  : item?.pType === "Office"
                  ? redIcon
                  : blueIcon
              }
            >
              <Popup>
                <Typography variant="h4" sx={{ fontSize: "14px" }}>
                  <span
                    style={{
                      backgroundColor: "rgba(69, 79, 99, 0.08)",
                      padding: "5px 6px",
                      color: "#4c5976",
                      borderRadius: "5px",
                      display: "block",
                      width: "max-content",
                    }}
                  >
                    Address:
                  </span>{" "}
                  {item?.address}
                </Typography>
                {item?.pType && (
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "14px", marginY: "10px" }}
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(69, 79, 99, 0.08)",
                        padding: "5px 6px",
                        color: "#4c5976",
                        borderRadius: "5px",
                        display: "block",
                        width: "max-content",
                      }}
                    >
                      Place Type property:
                    </span>{" "}
                    {item.pType}
                  </Typography>
                )}
              </Popup>
            </Marker>
          );
        })}
        <LocationMarker />
      </MapContainer>
    </Box>
  );
};

export default Leaflet;
