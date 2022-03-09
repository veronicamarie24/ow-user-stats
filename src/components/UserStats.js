import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary
}));

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
      <Box className="user-container" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Item elevation="0">
              <Avatar alt={name} src={icon} sx={{ width: 56, height: 56 }} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item elevation="0">
              <Typography variant="h4" gutterBottom component="div">
                Battle tag: {name}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation="0">
              <Typography variant="h4" gutterBottom component="div">
                Level: {prestige}
                {level}
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserStats;
