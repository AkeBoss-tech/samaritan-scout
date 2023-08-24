import Section from "../components/Section";
import MaterialTheme from "../components/MaterialTheme";
import {
  ThemeProvider,
  styled
} from "@mui/material/styles";
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, useTheme } from '@mui/material';

import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import Stepper from "@mui/material/Stepper";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import { StepContent } from "@mui/material";
import { ListItem } from "@mui/material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function About() {
  return (
    <>
      <ThemeProvider theme={MaterialTheme}>
        <Section
          title="Our Mission"
          children={[
            "Samaritan Scout utilizes a program developed with natural language processing, crawling and scraping functionality, and database management, which serves as the basis for the search engine.",
            "To identify the websites of nonprofit organizations that seek volunteers, we are leveraging both technologies – using a diverse range of libraries and repositories – and human expertise. We are automating searches to help build our library, while also finding new websites and organizations from volunteer researchers and partners.",
          ]}
          cols={6}
          primary={false}
          separator={true}
        />
        <Section
          title="We Envision"
          children={["a brighter tomorrow"]}
          cols={12}
          primary={true}
          separator={false}
          center={true}
        />
        <Section
          title="Our Plan"
          children={[
            "Samaritan Scout [a 501(c)3] is developing a back-end Search Engine and front-end Community Platform to help people easily discover experiences where they can have an impact, apply skills, build community, and find joy.",
            "The underlying web crawler and criterion-specific search experience (developed by Rene Ravenal, Will Rosenthal, and a team of volunteers) will let you specify location and dates, causes, and activities. The front-end platform will support account creation, ‘favorite-ing’ of search results, and posting/sharing your activities.",
            "The team is currently building the proof of concept in the New York/New Jersey area and will select additional regions for future expansion.",
          ]}
          cols={4}
          primary={false}
          separator={true}
        />
        <TimelineComponent />
          <Timeline2Component />
      </ThemeProvider>
    </>
  );
}

const HorizontalTimeline = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
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
          <Typography variant="h6">Search Engine in greater NY region</Typography>
          <Typography>Build database of nonprofit websites</Typography>
          <Typography>Leverage AI to organize data for keyword search and filtering</Typography>
          <Typography>Insert geolocation capabilities for geographic parameters</Typography>
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
          <Typography variant="h6">Community Platform for Volunteers</Typography>
          <Typography>Support account creation</Typography>
          <Typography>Launch social-media platform for relationships and sharing</Typography>
          <Typography>Enhance nonprofit organizations’ presence and information</Typography>
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
          <Typography>Offer AI conversational experience for volunteer opportunities</Typography>
          <Typography>Inject AI for 'intelligent' customized recommendations</Typography>
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
          <Typography>Build database of nonprofits in target regions</Typography>
          <Typography>Leverage marketing/PR to attract local volunteers</Typography>
          <Typography>Raise funds for ongoing performance and scalability</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

const steps = [
  'Phase 1',
  'Phase 2',
  'Phase 3',
  'Phase 4',
];

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

const PhaseIcon2 = [SearchIcon, VolunteerActivismIcon, SmartToyIcon, SouthAmericaIcon];

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
              <li>Build database of nonprofit websites</li>
              <li>Leverage AI to organize data in support of keyword search and filtering</li>
              <li>Insert geolocation capabilities to support geographic parameters</li>
              <li>Optimize search experience</li>
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
              <li>Support account creation</li>
              <li>Launch social-media platform that supports relationships and documenting/sharing media and posts</li>
              <li>Enhance nonprofit organizations’ presence and information</li>
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
              <li>Offer AI conversational experience to render appropriate volunteer opportunities</li>
              <li>Inject AI to provide volunteers with ‘intelligent’ customized recommendations of volunteer experiences</li>
              <li>Integrate attendance and registration tools for volunteer opportunities</li>
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
              <li>Build database of nonprofits at additional target regions</li>
              <li>Leverage marketing/PR techniques to attract local volunteers and review nonprofit organization database</li>
              <li>Raise funds to ensure ongoing optimal site performance and scale functionality</li>
            </ul>
          </Typography>

        </div>
      );
    default:
      return null;
  }
};

const Timeline2Component = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stepper activeStep={0} alternativeLabel orientation="horizontal">
          {steps.slice(0, activeStepCount).map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={PhaseIcon2[steps.indexOf(label)]}> </StepLabel>
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
          {steps.slice(activeStepCount, activeStepCount + additional).map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={PhaseIcon2[steps.indexOf(label)]}> </StepLabel>
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
