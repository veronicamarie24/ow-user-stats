import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UserStats = () => {
  const [userStats, setUserStats] = useState({});
  const [userStatsApi, setUserStatsApi] = useState(
    "https://ow-api.com/v1/stats/pc/us/Veronicake-1492/profile"
  );
  const [searchRegion, setSearchRegion] = useState("");

  const getUserStats = () => {
    fetch(userStatsApi)
      .then((response) => response.json())
      .then((data) => setUserStats(data));
  };

  useEffect(() => {
    getUserStats();
  }, [userStatsApi]);

  const buildApiUrl = (platform, region, battleTag) => {
    const url = `https://ow-api.com/v1/stats/${platform}/${region}/${battleTag}/profile`;
    setUserStatsApi(url);
  };

  const handleSubmit = () => {};

  const handleSearchRegionChange = () => {
    setSearchRegion();
  };

  const handleSearchPlatformChange = () => {
    setSearchRegion();
  };

  const { name, level, prestige, icon } = userStats;

  return (
    <div>
      <div className="search-user">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="us"
            label="region"
            onChange={handleSearchRegionChange}
          >
            <MenuItem value={"us"}>USA</MenuItem>
            <MenuItem value={"eu"}>Europe</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Platform</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="pc"
            label="platform"
            onChange={handleSearchPlatformChange}
          >
            <MenuItem value={"pc"}>PC</MenuItem>
            <MenuItem value={"xbl"}>Xbox</MenuItem>
            <MenuItem value={"psn"}>Playstation</MenuItem>
            <MenuItem value={"nintendo-switch"}>Nintendo Switch</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined"
          label="Username"
          defaultValue="Veronicake#1492"
          sx={{ m: 1 }}
        />
        <Button variant="outlined" size="large" sx={{ m: 1, pt: 1.5, pb: 1.5 }}>
          Search
        </Button>
      </div>
      <div className="user-container">
        <Avatar alt={name} src={icon} sx={{ width: 56, height: 56 }} />
        <Typography variant="h4" gutterBottom component="div" sx={{ mt: 2 }}>
          Battle tag: {name}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Level: {prestige}
          {level}
        </Typography>
      </div>
    </div>
  );
};

export default UserStats;
