import Section from "../components/Section";
import Carousel from "react-material-ui-carousel";
import MaterialTheme from "../components/MaterialTheme";
import { ThemeProvider, styled } from "@mui/material/styles";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import Stepper from "@mui/material/Stepper";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { Grid } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { useMediaQuery } from "@mui/material";
import CustomSection from "../components/CustomSection";
import CustomButton from "../components/CustomButton";
import color_theme from "../components/Theme";
import CustomContainer from "../components/CustomSection";
import CustomBackgroundSection from "../components/CustomBackgroundSection";
import { green } from "@mui/material/colors";
import DuoLinks from "../components/DuoLinks";
import Separator from "../components/Separator";
import React from "react";

function About() {
  return (
    <>
      <ThemeProvider theme={MaterialTheme}>
        <CustomBackgroundSection
          image="https://www.metrolibrary.org/sites/default/files/2019-03/Support-us-banner.jpg"
          transparency={0.7}
        >
          <CustomSection
            bgStyle="transparent"
            paddingY="large"
            marginStyle="wide"
          >
            <Typography variant="subtitle2" align="center" gutterBottom>
              About Us
            </Typography>
            <Box sx={{ height: "2rem" }} />
            <Typography variant="h6" align="center" gutterBottom>
              We live in a world filled with kind people who have enthusiasm and
              skills to share.
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              We’re here to empower them.
            </Typography>
          </CustomSection>
        </CustomBackgroundSection>
        <CustomSection bgStyle="gray" marginStyle="wide">
          <Typography variant="body1" align="left" gutterBottom>
            <strong>Modern technology</strong> suggests products to buy, shows
            to stream, and acquaintances to follow,
          </Typography>
          <Box sx={{ height: "1rem" }} />
          <Typography variant="body1" align="left" gutterBottom>
            But it has not been harnessed to{" "}
            <strong>match us to nearby service experiences</strong> that best
            fit our abilities or interests.
          </Typography>
          <Box sx={{ height: "1rem" }} />
          <Typography variant="h5" align="center" gutterBottom>
            <strong>UNTIL NOW</strong>
          </Typography>
        </CustomSection>
        {/* <Section
          title='Our Mission'
          children={[
            'Samaritan Scout utilizes a program developed with natural language processing, crawling and scraping functionality, and database management, which serves as the basis for the search engine.',
            'To identify the websites of nonprofit organizations that seek volunteers, we are leveraging both technologies – using a diverse range of libraries and repositories – and human expertise. We are automating searches to help build our library, while also finding new websites and organizations from volunteer researchers and partners.',
          ]}
          cols={6}
          primary={false}
          separator={true}
        /> */}
        <CustomSection bgStyle="white" paddingY="large">
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            Our Mission
          </Typography>
          <Separator primary={false} />
          <Typography
            variant="body1"
            color={color_theme.primaryFontColor}
            align="center"
          >
            We harness cutting-edge technology to connect individuals with
            meaningful and impactful service activities.
          </Typography>
        </CustomSection>
        {/* <Section
          title="We Envision"
          children={["a brighter tomorrow"]}
          cols={12}
          primary={true}
          separator={false}
          center={true}
        /> */}
        <CustomSection bgStyle="accent" paddingY="medium" marginStyle="wide">
          <Typography variant="h1" align="center" gutterBottom>
            Our Vision
          </Typography>
          <Box sx={{ height: "20px " }}></Box>
          <Typography variant="body1" align="center" gutterBottom>
            We aim to create a better world by inspiring a culture of service
            and enabling individuals everywhere to contribute positively to
            their community and beyond.
          </Typography>
        </CustomSection>
        <Section
          title="Our Plan"
          children={[
            "We’re developing a program with natural language processing, crawling/scraping functionality, and database management to serve as the basis of our search engine.",
          ]}
          cols={12}
          primary={false}
          separator={true}
        />
        <CustomSection bgStyle="white" paddingY="large">
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            Our Plan
          </Typography>
          <Separator primary={false} />
          <Typography
            variant="body1"
            color={color_theme.primaryFontColor}
            align="center"
          >
            We’re developing a program with natural language processing,
            crawling/scraping functionality, and database management to serve as
            the basis of our search engine.
          </Typography>
        </CustomSection>
        {/* <TimelineComponent /> */}
        {/* <Timeline2Component /> */}
        <PhaseCarousel />
        <Phases />
        <Container maxWidth={"xl"} sx={{ paddingY: 10 }}>
          <DuoLinks />
        </Container>

        <CustomContainer bgStyle="primary" paddingY="large">
          <Typography
            variant="h2"
            color={color_theme.primaryFontColor}
            align="center"
          >
            Meet the People making this Vision a Reality
          </Typography>
          <Box sx={{ height: "20px " }}></Box>
          <Link href="/people">
            <CustomButton
              size="medium"
              bgStyle="secondary"
              hoverStyle="light"
              // startIcon={<AddIcon />}
            >
              <Typography fontWeight={"bold"}>Our Team</Typography>
            </CustomButton>
          </Link>
        </CustomContainer>
      </ThemeProvider>
    </>
  );
}

let phaseList = {
  "Phase 1": [
    "Search Engine in Greater New York Area",
    "Build database of nonprofit websites",
    "Leverage AI to organize data in support of keyword search and filtering",
    "Insert geolocation capabilities to support geographic parameters",
    "Optimize search experience",
  ],
  "Phase 2": [
    "Community Platform for Volunteers",
    "Support account creation",
    "Launch social-media platform that supports relationships and documenting/sharing media and posts",
    "Enhance nonprofit organizations’ presence and information",
  ],
  "Phase 3": [
    "Non-Search Search Experience",
    "Offer AI conversational experience to render appropriate volunteer opportunities",
    "Inject AI to provide volunteers with ‘intelligent’ customized recommendations of volunteer experiences",
    "Integrate attendance and registration tools for volunteer opportunities",
  ],
  "Phase 4": [
    "Develop additional regions",

    "Build database of nonprofits at additional target regions",
    "Leverage marketing/PR techniques to attract local volunteers and review nonprofit organization database",
    "Raise funds to ensure ongoing optimal site performance and scale functionality",
  ],
};

function returnIcon(index: number) {
  switch (index) {
    case 0:
      return <SearchIcon fontSize="inherit" />;
    case 1:
      return <VolunteerActivismIcon fontSize="inherit" />;
    case 2:
      return <SmartToyIcon fontSize="inherit" />;
    case 3:
      return <SouthAmericaIcon fontSize="inherit" />;
    default:
      return <SearchIcon fontSize="inherit" />;
  }
}

const PhaseCarousel = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const oppList: any = [];
  Object.keys(phaseList).forEach((key: string) => {
    const value = phaseList[key as keyof typeof phaseList];
    const lastCharacter = key[key.length - 1];
    const iconIndex =
      parseInt(lastCharacter, 10) - 1 < 4 ? parseInt(lastCharacter, 10) - 1 : 0;

    oppList.push(
      <PhaseCard
        title={key}
        icon={returnIcon(iconIndex)}
        main={value[0]}
        goals={value.slice(0, value.length - 1)}
      />
    );
  });

  return (
    <CustomContainer bgStyle="white" paddingY="medium" marginStyle="narrow">
      <Typography variant="h1" color={color_theme.fontColor} align="center">
        Recent Volunteer Activities
      </Typography>
      <Separator primary={false} />

      <Carousel animation="slide" autoPlay={false}>
        {(() => {
          if (isXs) {
            return oppList;
          }

          if (isLg || !isXs) {
            const duos: any = [];

            for (let i = 0; i < oppList.length; i += 2) {
              duos.push(
                <Grid container spacing={2} key={i}>
                  <Grid item xs={12} sm={5}>
                    {oppList[i]}
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    {oppList[i + 1]}
                  </Grid>
                </Grid>
              );
            }

            return duos;
          }
          if (isXl) {
            const quads: any = [];
            for (let i = 0; i < oppList.length; i += 4) {
              quads.push(
                <Grid container spacing={2} key={i}>
                  <Grid item xs={12} sm={3}>
                    {oppList[i]}
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    {oppList[i + 1]}
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    {oppList[i + 2]}
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    {oppList[i + 3]}
                  </Grid>
                </Grid>
              );
            }
            return quads;
          }
        })()}
      </Carousel>
    </CustomContainer>
  );
};

const HorizontalTimeline = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
});

const TimelineComponent = () => {
  return (
    <Timeline position="alternate">
      {/* PHASE 1 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SearchIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h3">Phase 1</Typography>
          <Typography variant="h6">
            Search Engine in greater NY region
          </Typography>
          <Typography>Build database of nonprofit websites</Typography>
          <Typography>
            Leverage AI to organize data for keyword search and filtering
          </Typography>
          <Typography>
            Insert geolocation capabilities for geographic parameters
          </Typography>
          <Typography>Optimize search experience</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* PHASE 2 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info">
            <Typography variant="h6">2</Typography>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h3">Phase 2</Typography>
          <Typography variant="h6">
            Community Platform for Volunteers
          </Typography>
          <Typography>Support account creation</Typography>
          <Typography>
            Launch social-media platform for relationships and sharing
          </Typography>
          <Typography>
            Enhance nonprofit organizations’ presence and information
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* PHASE 3 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MdOutlineVolunteerActivism />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h3">Phase 3</Typography>
          <Typography variant="h6">Non-Search Search Experience</Typography>
          <Typography>
            Offer AI conversational experience for volunteer opportunities
          </Typography>
          <Typography>
            Inject AI for 'intelligent' customized recommendations
          </Typography>
          <Typography>Integrate attendance and registration tools</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* PHASE 4 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info">
            <Typography variant="h6">4</Typography>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h3">Phase 4</Typography>
          <Typography variant="h6">Develop additional regions</Typography>
          <Typography>
            Build database of nonprofits in target regions
          </Typography>
          <Typography>
            Leverage marketing/PR to attract local volunteers
          </Typography>
          <Typography>
            Raise funds for ongoing performance and scalability
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

const steps = ["Phase 1", "Phase 2", "Phase 3", "Phase 4"];

const PhaseIcon = ({ step }: { step: number }) => {
  switch (step) {
    case 0:
      return SearchIcon;
    case 1:
      return VolunteerActivismIcon;
    case 2:
      return SmartToyIcon;
    case 3:
      return SouthAmericaIcon;
    default:
      return null;
  }
};

const PhaseIcon2 = [
  SearchIcon,
  VolunteerActivismIcon,
  SmartToyIcon,
  SouthAmericaIcon,
];

const PhaseText = ({ step }: { step: number }) => {
  switch (step) {
    case 0:
      return (
        <div>
          {/* Phase 1 content */}
          <Typography textAlign="center" variant="h5">
            Search Engine in greater NY region
          </Typography>
          <Typography component="div" textAlign="center">
            <ul>
              <p>Build database of nonprofit websites</p>
              <p>
                Leverage AI to organize data in support of keyword search and
                filtering
              </p>
              <p>
                Insert geolocation capabilities to support geographic parameters
              </p>
              <p>Optimize search experience</p>
            </ul>
          </Typography>
        </div>
      );
    case 1:
      return (
        <div>
          {/* Phase 2 content */}
          <Typography textAlign="center" variant="h5">
            Community Platform for Volunteers
          </Typography>
          <Typography component="div" textAlign="center">
            <ul>
              <p>Support account creation</p>
              <p>
                Launch social-media platform that supports relationships and
                documenting/sharing media and posts
              </p>
              <p>Enhance nonprofit organizations’ presence and information</p>
            </ul>
          </Typography>
        </div>
      );
    case 2:
      return (
        <div>
          {/* Phase 3 content */}
          <Typography textAlign="center" variant="h5">
            Non-Search Search Experience
          </Typography>
          <Typography component="div" textAlign="center">
            <ul>
              <p>
                Offer AI conversational experience to render appropriate
                volunteer opportunities
              </p>
              <p>
                Inject AI to provide volunteers with ‘intelligent’ customized
                recommendations of volunteer experiences
              </p>
              <p>
                Integrate attendance and registration tools for volunteer
                opportunities
              </p>
            </ul>
          </Typography>
        </div>
      );
    case 3:
      return (
        <div>
          {/* Phase 4 content */}
          <Typography textAlign="center" variant="h5">
            Develop additional regions
          </Typography>
          <Typography component="div" textAlign="center">
            <ul>
              <p>Build database of nonprofits at additional target regions</p>
              <p>
                Leverage marketing/PR techniques to attract local volunteers and
                review nonprofit organization database
              </p>
              <p>
                Raise funds to ensure ongoing optimal site performance and scale
                functionality
              </p>
            </ul>
          </Typography>
        </div>
      );
    default:
      return null;
  }
};

const Phases = () => {
  return (
    <CustomSection bgStyle="gray">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <PhaseCard
            title="Phase 1"
            icon={<SearchIcon fontSize="inherit" />}
            main="Search Engine in greater NY region"
            goals={[
              "Build database of nonprofit websites",
              "Leverage AI to organize data in support of keyword search and filtering",
              "Insert geolocation capabilities to support geographic parameters",
              "Optimize search experience",
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PhaseCard
            title="Phase 2"
            icon={<VolunteerActivismIcon fontSize="inherit" />}
            main="Community Platform for Volunteers"
            goals={[
              "Support account creation",
              "Launch social-media platform that supports relationships and documenting/sharing media and posts",
              "Enhance nonprofit organizations’ presence and information",
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PhaseCard
            title="Phase 3"
            icon={<SmartToyIcon fontSize="inherit" />}
            main="Non-Search Search Experience"
            goals={[
              "Offer AI conversational experience to render appropriate volunteer opportunities",
              "Inject AI to provide volunteers with ‘intelligent’ customized recommendations of volunteer experiences",
              "Integrate attendance and registration tools for volunteer opportunities",
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PhaseCard
            title="Phase 4"
            icon={<SouthAmericaIcon fontSize="inherit" />}
            main="Develop additional regions"
            goals={[
              "Build database of nonprofits at additional target regions",
              "Leverage marketing/PR techniques to attract local volunteers and review nonprofit organization database",
              "Raise funds to ensure ongoing optimal site performance and scale functionality",
            ]}
          />
        </Grid>
      </Grid>
    </CustomSection>
  );
};

const PhaseCard = ({
  title,
  main,
  icon,
  goals,
}: {
  title: string;
  main: string;
  icon: React.ReactNode;
  goals: string[];
}) => {
  return (
    // big green icon
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 2,
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            backgroundColor: green[500],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            color: "rgb(255, 255, 255, 0.9)",
          }}
        >
          {icon}
        </Avatar>
      </Box>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h5" sx={{ paddingBottom: 2 }}>
        {main}
      </Typography>
      <Card
        sx={{
          justifyContent: "left",
          alignItems: "left",
          textAlign: "left",
        }}
      >
        <CardContent>
          <ul>
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Box sx={{ paddingBottom: 4 }} />
    </>
  );
};

const Timeline2Component = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  let activeStepCount = 4; // Default for xl and lg screens
  let additional = 0;
  if (isMd) {
    activeStepCount = 2; // For md screens
    additional = 2;
  }
  if (isXs || isSm) {
    activeStepCount = 1; // For xs and sm screens
    additional = 1;
  }

  return (
    <Grid container spacing={2} paddingTop={"50px"}>
      <Grid item xs={12}>
        <Stepper activeStep={0} alternativeLabel orientation="horizontal">
          {steps.slice(0, activeStepCount).map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={PhaseIcon2[steps.indexOf(label)]}>
                {" "}
              </StepLabel>
              <Typography textAlign="center" variant="h3">
                {label}
              </Typography>
              <PhaseText step={steps.indexOf(label)} />
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={12}>
        <Stepper activeStep={-1} alternativeLabel orientation="horizontal">
          {steps
            .slice(activeStepCount, activeStepCount + additional)
            .map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={PhaseIcon2[steps.indexOf(label)]}>
                  {" "}
                </StepLabel>
                <Typography textAlign="center" variant="h3">
                  {label}
                </Typography>
                <PhaseText step={steps.indexOf(label)} />
              </Step>
            ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export default About;
