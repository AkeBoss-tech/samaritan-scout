import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import Card from '../components/Card';
import React from 'react';
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <Grid
          container
          spacing={1}
          paddingTop={"35px"}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid xs={10} sm={6} md={5} lg={4} xl={4} textAlign={"center"}>
            <TextField
              variant="outlined"
              placeholder="Enter keywords..."
              color="primary"
              margin="dense"
              fullWidth={true}
              disabled={true} // TODO: Enable this when we have the backend
              sx={{ backgroundColor: "#fff", input: { color: "black" } }}
            />
          </Grid>
          <Grid
            xs={10}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            textAlign={"center"}
            alignItems={"center"}
            justifyContent="center"
          >
            <TextField
              variant="outlined"
              placeholder="Enter location..."
              color="primary"
              margin="dense"
              fullWidth={true}
              disabled={true} // TODO: Enable this when we have the backend
              sx={{ backgroundColor: "#fff", input: { color: "black" } }}
            />
          </Grid>
          <Grid
            xs={10}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            textAlign={"center"}
            alignItems={"center"}
            sx={{ paddingTop: "3px" }}
          >
            <Button
              variant="contained"
              color="primary"
              id="inPerson"
              fullWidth={true}
              sx={{ height: 55 }}
            >
              <SearchIcon />
            </Button>
          </Grid>

          <Grid
            xs={11}
            textAlign={"center"}
            alignItems={"center"}
            sx={{ paddingTop: "3px" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
              }
              label="In Person"
              sx={{ fontSize: "24px" }}
            />
            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
              }
              label="Remote"
              sx={{ fontSize: "24px" }}
            />
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
        </Grid>
    </>
  );
};

const Search = () => {
  return (
    <>
      <div>Search</div>
      <SearchBar />
    </>
  );
};

export default Search;
