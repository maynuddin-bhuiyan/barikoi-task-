import { Box, Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Leaflet from "./components/map";
import SideBar from "./components/sidebar";
import RootTheme from "./theme";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <RootTheme>
     <Grid container spacing={2}>
      <Grid xs={`${sidebar ? 5 : 0}`} zIndex={`${sidebar ? 1000 : 0}`}>
        <Box sx={{ width: "100%" }}>
          <SideBar setSidebar={setSidebar} sidebar={sidebar} />
        </Box>
      </Grid>
      <Grid xs={`${sidebar ? 7 : 12}`} zIndex={10}>
        <Box sx={{ width: "100%" }}>
          <Leaflet setSidebar={setSidebar} sidebar={sidebar} />
        </Box>
      </Grid>
    </Grid>
    </RootTheme>
  );
}

export default App;