// import '../App.css';
import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
//import { Nav } from "react-bootstrap"
import {
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
  styled,
  MobileStepper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TranslateIcon from "@mui/icons-material/Translate";

import "./styles.css";
import color_theme from "../components/Theme";
import Separator from "../components/Separator";
import MaterialTheme from "../components/MaterialTheme";
import VolunteerCard from "../components/Card";
import CustomButton from "../components/CustomButton";
import margins from "../components/ThemeMargins";
import CustomContainer from "../components/CustomSection";
import Carousel from "react-material-ui-carousel";

import opportunities from "../opportunities.json";
import React from "react";
import { BiHome } from "react-icons/bi";

// Code from https://mui.com/ with some modifications

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

function Home() {
  return (
    <div className="Home">
      <ThemeProvider theme={MaterialTheme}>
        <ReactHome />
        <WorkInProgress />
        <CustomContainer bgStyle="paper" padding="large">
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            We have exciting volunteer opportunities for you!
          </Typography>
          <Box sx={{ height: "20px " }}></Box>
          {/* <Button variant="contained" size="large">
            Volunteer Near You
          </Button> */}
          <CustomButton
            size="medium"
            bgStyle="secondary"
            hoverStyle="light"
            // startIcon={<AddIcon />}
          >
            <Typography fontWeight={"bold"}>Volunteer Near You</Typography>
          </CustomButton>
        </CustomContainer>
        <RecentActivity />
        <VolunteerLove />
        <CustomContainer bgStyle="accent" padding="medium">
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            We’re making it easier for people and organizations to DO GOOD
          </Typography>
        </CustomContainer>
        <OtherStuff primary={false} />
        <CustomContainer bgStyle="primary" padding="large">
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            Meet the People making this Vision a Reality
          </Typography>
          <Box sx={{ height: "20px " }}></Box>
          <CustomButton
            size="medium"
            bgStyle="secondary"
            hoverStyle="light"
            // startIcon={<AddIcon />}
          >
            <Typography fontWeight={"bold"}>Our Team</Typography>
          </CustomButton>
        </CustomContainer>
      </ThemeProvider>
    </div>
  );
}

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
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
          <Grid xs={10} sm={10} md={11} lg={11} xl={11} textAlign={"center"}>
            <Typography variant="subtitle2" component="h1" gutterBottom>
              DISCOVER VOLUNTEER OPPORTUNITIES
            </Typography>
          </Grid>
          <Grid xs={10} sm={10} md={11} lg={11} xl={11} textAlign={"center"}>
            <Typography variant="h3" gutterBottom>
              The web’s first search engine focused exclusively on finding ways
              we can help nonprofit organizations we care about
            </Typography>
          </Grid>
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
              onClick={handleScrollToElement}
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
          <Grid xs={12} textAlign={"center"}>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={handleScrollToElement}
            >
              <ArrowDownwardIcon fontSize="inherit" style={{}} />
            </IconButton>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
        </Grid>
      </ProductHeroLayoutRoot>
      <div ref={targetRef}></div>
    </>
  );
};

function OtherStuff({ primary }: { primary: boolean }) {
  const bgColor = primary ? color_theme.primaryBgColor : color_theme.bgColor;
  const fontColor = primary
    ? color_theme.primaryFontColor
    : color_theme.fontColor;
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
      <CustomContainer bgStyle="white" padding="small">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={"center"}
            alignSelf={"center"}
          >
            <Typography
              variant="h2"
              align="left"
              color={fontColor}
              textAlign={"center"}
            >
              Harnessing the latest technology…
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color={fontColor}
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
              width={"80%"}
            />
          </Grid>
        </Grid>
      </CustomContainer>
      <CustomContainer bgStyle="white" padding="small">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} alignSelf={"center"} maxWidth={"5"}>
            <img
              src="https://www.cio.com/wp-content/uploads/2023/05/iStock-654187068.jpg?quality=50&strip=all"
              alt="overburdened"
              style={{ maxWidth: imageWidth }}
              width={"80%"}
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
              variant="h2"
              align="left"
              color={fontColor}
              textAlign={"center"}
            >
              Lightening the load on nonprofitable organizations and charities…
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color={fontColor}
              textAlign={"center"}
            >
              Removing the burden of entering volunteer info on 3rd party static
              databases
            </Typography>
          </Grid>
        </Grid>
      </CustomContainer>
      <CustomContainer bgStyle="white" padding="small">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={"center"}
            alignSelf={"center"}
          >
            <Typography
              variant="h2"
              align="left"
              color={fontColor}
              textAlign={"center"}
            >
              Building community…
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color={fontColor}
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
              width={"80%"}
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </>
  );
}

function getIcon(icon: string) {
  switch (icon) {
    /* case "food":
      return <FastfoodIcon />;
    case "home":
      return <HomeIcon />;
    case "nature":
      return <NatureIcon />;
    case "people":
      return <PeopleIcon />; */
    case "Public":
      return <PublicIcon />;
    case "Health":
      return <HealthAndSafetyIcon />;
    case "Translate":
      return <TranslateIcon />;
    default:
      return <BiHome />;
  }
}

function RecentActivity() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const oppList: any = [];
  Object.keys(opportunities).forEach((key: string) => {
    const value = opportunities[key as keyof typeof opportunities];
    oppList.push(
      <React.Fragment key={key}>
        <VolunteerCard
          volunteer={key}
          cause={value.cause}
          description={value.description}
          imageSrc={value.imageSrc}
          icon={getIcon(value.icon)}
        />
      </React.Fragment>
    );
  });

  return (
    <CustomContainer bgStyle="white" padding="medium" marginStyle="narrow">
      <Typography variant="h1" color={color_theme.fontColor} align="center">
        Recent Volunteer Activities
      </Typography>
      <Separator primary={false} />

      <Carousel animation="slide" stopAutoPlayOnHover={true}>
        {(() => {
          if (isXs) {
            return oppList;
          }

          const trios: any = [];

          for (let i = 0; i < oppList.length; i += 3) {
            trios.push(
              <Grid container spacing={2} key={i}>
                <Grid item xs={12} sm={4}>
                  {oppList[i]}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {oppList[i + 1]}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {oppList[i + 2]}
                </Grid>
              </Grid>
            );
          }

          return trios;
        })()}
      </Carousel>
    </CustomContainer>
  );
}

function VolunteerLove() {
  return (
    <CustomContainer bgStyle="paper" padding="medium" marginStyle="narrow">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          alignItems={"center"}
          textAlign={"center"}
          paddingBottom={{ xs: "50px" }}
        >
          <Box sx={{ height: { sm: "25%" } }}></Box>
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
            paddingBottom="5px"
          >
            Volunteers Love Us!
          </Typography>
          <Box sx={{ height: "10%" }}></Box>
          <CustomButton
            size="medium"
            bgStyle="primary"
            hoverStyle="dark"
            // startIcon={<AddIcon />}
          >
            <Typography fontWeight={"bold"}>Join Us!</Typography>
          </CustomButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          justifyContent="center"
          alignItems="center"
          textAlign={"center"}
        >
          <VolunteerCard
            cause="Environment"
            volunteer="Trash Pickup"
            description="Help clean up the park and keep it beautiful for all to enjoy!"
            imageSrc="https://westernelite.com/wp-content/uploads/2022/04/historytrash-Large-1080x675.jpeg"
            icon={<PublicIcon />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          justifyContent="center"
          alignItems="center"
          textAlign={"center"}
        >
          <VolunteerCard
            cause="Environment"
            volunteer="Trash Pickup"
            description="Help clean up the park and keep it beautiful for all to enjoy!"
            imageSrc="https://westernelite.com/wp-content/uploads/2022/04/historytrash-Large-1080x675.jpeg"
            icon={<PublicIcon />}
          />
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

function WorkInProgress() {
  return (
    <>
      <CustomContainer bgStyle="white" padding="medium" marginStyle="wide">
        <Typography variant="h2" color={color_theme.fontColor} align="center">
          The web’s first search engine focused exclusively on finding ways we
          can help nonprofit organizations we care about is COMING SOON.
        </Typography>
      </CustomContainer>
    </>
  );
}

export default Home;
