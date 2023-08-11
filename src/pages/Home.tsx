// import '../App.css';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@mui/material/styles";
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
  useMediaQuery,
  useTheme,
  IconButton,
  ButtonGroup,
  styled,
  Paper,
} from "@mui/material";
import Footer from "../components/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "./styles.css";
import Section from "../components/Section";
import theme from "../components/Theme";
import Separator from "../components/Separator";
import Navbar from "../components/Navbar";
import MaterialTheme from "../components/MaterialTheme";

// Code from https://mui.com/ with some modifications

function Home() {
  return (
    <div className="Home">
      <ThemeProvider theme={MaterialTheme}>
        <BootstrapHome />
        <RecentActivity />
        <Container
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            flex: 1,
            color: theme.primaryFontColor,
            backgroundColor: theme.accentBgColor,
          }}
          maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.primaryFontColor}
            align="center"
          >
            We’re making it easier for people and organizations to DO GOOD
          </Typography>
        </Container>
        <OtherStuff primary={false} />
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
      <Container
        style={{
          height: "calc(100vh-35px)",
          backgroundColor: theme.primaryBgColor,
          color: theme.primaryFontColor,
          alignContent: "center",
        }}
        maxWidth={false}
      >
        <Grid
          container
          spacing={2}
          paddingTop={"35px"}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Typography variant="h1" component="h1" gutterBottom>
              DISCOVER VOLUNTEER OPPORTUNITIES
            </Typography>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Typography variant="body1" gutterBottom>
              The web’s first search engine focused exclusively on finding ways
              we can help nonprofit organizations we care about
            </Typography>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
          <Grid xs={6} textAlign={"center"}>
            <TextField
              variant="outlined"
              label="Enter keywords..."
              color="primary"
              margin="dense"
              fullWidth={true}
            />
          </Grid>
          <Grid xs={1} textAlign={"center"}>
            <Button variant="contained" color="primary" id="inPerson" fullWidth={true}>
              <SearchIcon />
            </Button>
          </Grid>
          <Grid xs={8} textAlign={"center"} alignItems={'center'} justifyContent="center">
            <TextField variant="outlined" label="Enter location..." margin="dense" color="primary"/>
            <ButtonGroup>
              <Button variant="outlined" color="primary" id="inPerson">
                In-Person
              </Button>
              <Button variant="outlined" color="primary" id="remote">
                Remote
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <IconButton aria-label="delete" size="large">
              <ArrowDownwardIcon
                fontSize="inherit"
                style={{ color: "white" }}
              />
            </IconButton>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

function OtherStuff({ primary }: { primary: boolean }) {
  const bgColor = primary ? theme.primaryBgColor : theme.bgColor;
  const fontColor = primary ? theme.primaryFontColor : theme.fontColor;
  const theme1 = useTheme();
  const isXs = useMediaQuery(theme1.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme1.breakpoints.only("sm"));

  const imageWidth = isSm || isXs ? "90vw" : "45vw";

  const containerStyle = {
    paddingTop: "50px",
    paddingBottom: "50px",
    flex: 1,
    color: fontColor,
    backgroundColor: bgColor,
    display: "flex", // Center the content vertically and horizontally
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Container
        style={containerStyle}
        maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={"center"}
            alignSelf={"center"}
          >
            <Typography
              variant="h4"
              align="left"
              color={fontColor}
              className="lead"
              textAlign={"center"}
            >
              Harnessing the latest technology…
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color={fontColor}
              className="lead"
              textAlign={"center"}
            >
              to connect individuals with meaningful and impactful service
              activities
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} alignSelf={"center"}>
            <img
              src="https://media.istockphoto.com/id/1299624974/photo/futuristic-city-vr-wire-frame-with-group-of-people.jpg?s=612x612&w=0&k=20&c=Wf0Zroz23XgI-aDsF4bYNuRew_Jql-XjvECAGE0IIDo="
              alt="Image that shows tech and people"
              style={{ maxWidth: imageWidth }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        style={containerStyle}
        maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} alignSelf={"center"} maxWidth={"5"}>
            <img
              src="https://www.cio.com/wp-content/uploads/2023/05/iStock-654187068.jpg?quality=50&strip=all"
              alt="overburdened"
              style={{ maxWidth: imageWidth }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={"center"}
            alignSelf={"center"}
          >
            <Typography
              variant="h4"
              align="left"
              color={fontColor}
              className="lead"
              textAlign={"center"}
            >
              Lightening the load on nonprofitable organizations and charities…
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color={fontColor}
              className="lead"
              textAlign={"center"}
            >
              Removing the burden of entering volunteer info on 3rd party static
              databases
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        style={containerStyle}
        maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
      >
        <Grid container spacing={2} alignItems={"center"}>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={"center"}
            alignSelf={"center"}
          >
            <Typography
              variant="h4"
              align="left"
              color={fontColor}
              className="lead"
              textAlign={"center"}
            >
              Building community…
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color={fontColor}
              className="lead"
              textAlign={"center"}
            >
              Rooted in kindness and collaboration
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} alignSelf={"center"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
              alt="Image that shows tech and people"
              style={{ maxWidth: imageWidth, alignSelf: "center" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function RecentActivity() {
  return (
    <Container
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        flex: 1,
        color: theme.fontColor,
        backgroundColor: theme.bgColor,
      }}
      id="recent-activity"
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Typography variant="h3" color={theme.fontColor} align="center">
        Recent Volunteer Activities
      </Typography>
      <Separator primary={false} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="body1"
            align="left"
            color={theme.fontColor}
            className="lead"
            textAlign={"center"}
          >
            <a href="https://www.nycgovparks.org/events/2021/10/23/its-my-park-at-east-river-park">
              It's My Park at East River Park
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="body1"
            align="left"
            color={theme.fontColor}
            className="lead"
            textAlign={"center"}
          >
            <a href="https://www.nycgovparks.org/events/2021/10/23/its-my-park-at-east-river-park">
              It's My Park at East River Park
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="body1"
            align="left"
            color={theme.fontColor}
            className="lead"
            textAlign={"center"}
          >
            <a href="https://www.nycgovparks.org/events/2021/10/23/its-my-park-at-east-river-park">
              It's My Park at East River Park
            </a>
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
