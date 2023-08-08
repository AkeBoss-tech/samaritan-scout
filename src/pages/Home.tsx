// import '../App.css';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { Nav } from "react-bootstrap"
import {
  TextField,
  InputAdornment,
  Toolbar,
  Typography,
  Divider,
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import Footer from "../components/Footer";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


import "./styles.css"
import Section from "../components/Section";
import theme from "../components/Theme";
import Separator from "../components/Separator";

const themeReact = createTheme();

// Code from https://mui.com/ with some modifications

function Home() {
  return (
    <div className="Home">
      <ThemeProvider theme={themeReact}>
        <BootstrapHome />
        <RecentActivity />
        <Container
          style={{
            paddingTop: '50px',
            paddingBottom: '50px',
            flex: 1,
            color: theme.primaryFontColor,
            backgroundColor: theme.accentBgColor,
          }}
          maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
        >
          <Typography
            variant='h5'
            fontWeight={'bold'}
            noWrap
            color={theme.primaryFontColor}
            align='center'
          >
            We’re making it easier for people and organizations to DO GOOD
          </Typography>
        </Container>
        <OtherStuff />
      </ThemeProvider>
    </div>
  );
}

const BootstrapHome = () => {
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

  return (
    <>
    <div className="navbar navbar-expand-lg text-uppercase fixed-top bg-primary" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="home">Samaritan Scout</a>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
          aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
              href="search">Search</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
              href="about">About</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
              href="people">People</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
              href="donate">Donate</a></li>
          </ul>
        </div>
      </div>
    </div>
    <header className="masthead bg-primary text-white text-center" id="container-full">
        <div className="container d-flex align-items-center flex-column">
          <div className="divider-custom divider-light fs-3"></div>
          <h1 className="masthead-heading text-uppercase mb-0">DISCOVER VOLUNTEER OPPORTUNITIES</h1>
          <div className="divider-custom divider-light"></div>

          <p className="masthead-subheading font-weight-light mb-0">The web’s first search engine focused exclusively on
            finding ways we can help nonprofit organizations we care about</p>
          <div className="divider-custom divider-light"></div>


          <div className="col-lg-7 col-md-12 col-xl-6 col-sm-11">
            <div className="input-group mb-4 py">
              <input type="text" className="form-control fs-3" placeholder="Enter keywords..." />
                <button type="submit" className="btn btn-secondary"><SearchIcon /></button>
              </div>
          </div>


          <div className="col-lg-6 col-md-6 col-sm-7 col-xl-5">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter location..." />
                <div className="btn-group btn-toggle">
                  <button type="button" className="btn btn-outline-light" id="inPerson">In-Person</button>
                  <button type="button" className="btn btn-outline-light" id="remote">Remote</button>
                </div>
              </div>
          </div>

            <div className="divider-custom divider-light fs-3">
              <div className="btn-outline-success "><ArrowDownwardIcon /></div>
            </div>
          </div>
      </header>
      </>
  );
};

function OtherStuff() {
  return (
    <div></div>
  );
}

function RecentActivity() {
  return (
    <Container
      style={{
        paddingTop: '50px',
        paddingBottom: '50px',
        flex: 1,
        color: theme.fontColor,
        backgroundColor: theme.bgColor,
      }}
      id="recent-activity"
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Typography
        variant='h3'
        noWrap
        color={theme.fontColor}
        align='center'
      >
        Recent Volunteer Activities
      </Typography>
      <Separator primary={false} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" align="left" color={theme.fontColor} className="lead" textAlign={'center'}>
            <a href="https://www.nycgovparks.org/events/2021/10/23/its-my-park-at-east-river-park">It's My Park at East River Park</a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" align="left" color={theme.fontColor} className="lead" textAlign={'center'}>
            <a href="https://www.nycgovparks.org/events/2021/10/23/its-my-park-at-east-river-park">It's My Park at East River Park</a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" align="left" color={theme.fontColor} className="lead" textAlign={'center'}>
            <a href="https://www.nycgovparks.org/events/2021/10/23/its-my-park-at-east-river-park">It's My Park at East River Park</a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

function HomeSearch() {
  return (
    <Container
      sx={{
        backgroundColor: "lightgray",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
      }}
    >
      <img src="/logo.svg" className="Home-logo" alt="logo" width={"100px"} />
      <h1>Samaritan Scout</h1>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          label="Search"
          variant="outlined"
          placeholder="Enter Key Words ..."
          id="outlined-uncontrolled"
          color="primary"
          size="medium"
          sx={{ width: "auto", mr: "10px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  href="https://samaritanscout.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="medium"
                >
                  <SendIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
}

export default Home;
