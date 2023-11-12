import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAutoComplete } from "../../store/locations";

const Search = ({setIsShowLocationDeatils}) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState();

  const onSubmit = async () => {
    try {
      const { data } = await axios.get(`https://barikoi.xyz/v2/api/search/autocomplete/place?api_key=bkoi_9631428afe2b4ccc25fc7f9e91f27301bbc17157989e86765bd74cb4665b9ec9&q=${query}&city=dhaka&bangla=true`);      
      dispatch(getAutoComplete(data))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ padding: "10px"}}>
      <Box
        sx={{        
          boxShadow: "3px 4px 10px -4px rgba(0,0,0,.25)",
          padding: "12px 9px 12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginLeft: "20px",
        }}
      >
         <TextField id="standard-basic"  variant="standard" type="search"
          placeholder="Search Location."
          onChange={(e) => {
            setQuery(e.target.value,
            onSubmit(),
            setIsShowLocationDeatils(true)
            )}}
          sx={{
            border: "none",
            width: "100%",
            outline: "none",       
          }} />
        {/* <TextField
          
          
        /> */}
        <Button
          onClick={onSubmit}
          sx={{
            background: "linear-gradient(94deg,#3cb4be,#43de7f 97%)",
            padding: "8px 10px",
          }}
        >
          <SearchIcon sx={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
