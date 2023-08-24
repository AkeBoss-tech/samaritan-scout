// import '../App.css';
import { useState } from "react";
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
        <Container
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            flex: 1,
            color: color_theme.primaryFontColor,
            backgroundColor: color_theme.paperBgColor,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
        >
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
            size='medium'
            bgStyle='secondary'
            hoverStyle='light'
            // startIcon={<AddIcon />}
          >
            <Typography fontWeight={'bold'}>Volunteer Near You</Typography>
          </CustomButton>
        </Container>
        <RecentActivity />
        <VolunteerLove />
        <Container
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            flex: 1,
            color: color_theme.primaryFontColor,
            backgroundColor: color_theme.accentBgColor,
          }}
          maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
        >
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            We’re making it easier for people and organizations to DO GOOD
          </Typography>
        </Container>
        <OtherStuff primary={false} />
        <Container
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            flex: 1,
            color: color_theme.primaryFontColor,
            backgroundColor: color_theme.primaryBgColor,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
        >
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            Meet the People making this Vision a Reality
          </Typography>
          <Box sx={{ height: "20px " }}></Box>
          <CustomButton
            size='medium'
            bgStyle='secondary'
            hoverStyle='light'
            // startIcon={<AddIcon />}
          >
            <Typography fontWeight={'bold'}>Our Team</Typography>
          </CustomButton>
        </Container>
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
            <IconButton aria-label="delete" size="large">
              <ArrowDownwardIcon
                fontSize="inherit"
                style={{ }}
              />
            </IconButton>
          </Grid>
          <Grid xs={12} textAlign={"center"}>
            <Box sx={{ height: 35 }}></Box>
          </Grid>
        </Grid>
      </ProductHeroLayoutRoot>
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
        color: color_theme.fontColor,
        backgroundColor: color_theme.bgColor,
      }}
      id="recent-activity"
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Typography variant="h1" color={color_theme.fontColor} align="center">
        Recent Volunteer Activities
      </Typography>
      <Separator primary={false} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <VolunteerCard
            cause="Environment"
            volunteer="Trash Pickup"
            description="Help clean up the park and keep it beautiful for all to enjoy!"
            imageSrc="https://westernelite.com/wp-content/uploads/2022/04/historytrash-Large-1080x675.jpeg"
            icon={<PublicIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <VolunteerCard
            cause="Health"
            volunteer="Mask Distribution"
            description="Help XXYY distribute masks in schools!"
            imageSrc="https://media.defense.gov/2020/Oct/01/2002509681/-1/-1/0/200930-Z-DY403-027C.JPG"
            icon={<HealthAndSafetyIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <VolunteerCard
            cause="ESL"
            volunteer="English Speaking Volunteers"
            description="Help people learn English as their Second Language!"
            imageSrc="https://static.teachaway.com/wp-content/uploads/2020/11/13135238/eslclassroom_354760748.jpg"
            icon={<TranslateIcon />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function VolunteerLove() {
  return (
    <Container
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        flex: 1,
        color: color_theme.primaryFontColor,
        backgroundColor: color_theme.paperBgColor,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} alignItems={"center"} textAlign={"center"} paddingBottom={{ xs: "50px" }}>
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
            size='medium'
            bgStyle='primary'
            hoverStyle='dark'
            // startIcon={<AddIcon />}
          >
            <Typography fontWeight={'bold'}>Join Us!</Typography>
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
    </Container>
  );
}

function WorkInProgress() {
  return (
    <Container
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        flex: 1,
        color: color_theme.fontColor,
        backgroundColor: color_theme.bgColor,
      }}
      id="recent-activity"
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Typography variant="h2" color={color_theme.fontColor} align="center">
        The web’s first search engine focused exclusively on finding ways we can
        help nonprofit organizations we care about is COMING SOON.
      </Typography>
    </Container>
  );
}

export default Home;
