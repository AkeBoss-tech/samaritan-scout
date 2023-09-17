import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, TextField, ThemeProvider, Typography, styled } from '@mui/material';
import color_theme from "../components/Theme";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Card from '../components/Card';
import React, { useRef, useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import MaterialTheme from '../components/MaterialTheme';
import CustomSection from '../components/CustomSection';

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
    <ThemeProvider theme={MaterialTheme}>
      <ReactHome />
      <CustomSection bgStyle='gray' marginStyle='wide'>
          <Typography variant='body1' align='left' gutterBottom>
            <strong>Modern technology</strong> suggests products to buy, shows
            to stream, and acquaintances to follow,
          </Typography>
          <Box sx={{ height: '1rem' }} />
          <Typography variant='body1' align='left' gutterBottom>
            But it has not been harnessed to{' '}
            <strong>match us to nearby service experiences</strong> that best
            fit our abilities or interests.
          </Typography>
          <Box sx={{ height: '1rem' }} />
          <Typography variant='h5' align='center' gutterBottom>
            <strong>UNTIL NOW</strong>
          </Typography>
        </CustomSection>
    </ThemeProvider>
  );
};

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  backgroundColor: color_theme.primaryBgColor,
  color: color_theme.primaryFontColor,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "calc(100vh - 63px)",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const ReactHome = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [inPerson, setInPerson] = useState(true);
  const [remote, setRemote] = useState(false);

  const handleSubmit = () => {
    console.log("Keywords: ", keywords);
    console.log("Location: ", location);
    console.log("In-Person: ", inPerson);
    console.log("Remote: ", remote);
  };

  const targetRef = useRef<HTMLDivElement | null>(null);
  const handleScrollToElement = () => {
    // Scroll to the target element
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ProductHeroLayoutRoot>
        <Grid
          container
          spacing={1}
          paddingTop={"35px"}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
          <Grid item xs={10} sm={10} md={11} lg={11} xl={11} textAlign={"center"}>
            <Typography variant="subtitle2" component="h1" gutterBottom>
              DISCOVER VOLUNTEER OPPORTUNITIES
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={11} lg={11} xl={11} textAlign={"center"}>
            <Typography variant="h3" gutterBottom>
              The web’s first search engine focused exclusively on finding ways
              we can help nonprofit organizations we care about
            </Typography>
          </Grid>
          <Grid item xs={10} sm={6} md={5} lg={4} xl={4} textAlign={"center"}>
            <TextField
              variant="outlined"
              placeholder="Enter keywords..."
              color="primary"
              margin="dense"
              fullWidth={true}
              disabled={true} // TODO: Enable this when we have the backend
              sx={{ borderRadius: "10px", backgroundColor: "#fff", input: { color: "black" } }}
            />
          </Grid>
          <Grid item
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
              sx={{ borderRadius: "10px", backgroundColor: "#fff", input: { color: "black" } }}
            />
          </Grid>
          <Grid item
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
              sx={{ height: 60 }}
              onClick={handleScrollToElement}
            >
              <SearchIcon />
            </Button>
          </Grid>

          <Grid item
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
          <Grid item xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={handleScrollToElement}
            >
              <ArrowDownwardIcon fontSize="inherit" style={{}} />
            </IconButton>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
        </Grid>
      </ProductHeroLayoutRoot>
      <div ref={targetRef}></div>
    </>
  );
};

export default Search;
