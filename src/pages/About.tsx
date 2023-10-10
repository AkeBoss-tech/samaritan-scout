import Section from '../components/Section';
import Carousel from 'react-material-ui-carousel';
import MaterialTheme from '../components/MaterialTheme';
import { ThemeProvider, styled } from '@mui/material/styles';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import Stepper from '@mui/material/Stepper';
import { Step } from '@mui/material';
import { StepLabel } from '@mui/material';
import { Grid } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useMediaQuery } from '@mui/material';
import CustomSection from '../components/CustomSection';
import Button from '../components/button';
import color_theme from '../components/Theme';
import CustomContainer from '../components/CustomSection';
import CustomBackgroundSection from '../components/CustomBackgroundSection';
import { green } from '@mui/material/colors';
import DuoLinks from '../components/DuoLinks';
import Separator from '../components/Separator';
import React, { CSSProperties, useEffect, useState } from 'react';
import HeroImage from '../components/HeroImage';
import HeroImageContent from '../components/HeroImageContent';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const theme1 = useTheme();
  const isXs = useMediaQuery(theme1.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme1.breakpoints.only("sm"));

  let imageWidth = isSm || isXs ? "90vw" : "45vw";
  imageWidth = isXs ? "0" : imageWidth;
  
  return (
    <>
      <ThemeProvider theme={MaterialTheme}>
        <HeroImage imageSrc='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc2lvbiUyMGxlZCUyMHVzJTIwaGVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'>
          <HeroImageContent
            color='primary.light'
            xPosition='center'
            yPosition='bottom'
            width='wide'
          >
            <Typography variant='h3' textAlign={'center'}>
              We are a group of passionate students who are dedicated to making
              a difference in our community.
            </Typography>
            <Box sx={{ height: '20px' }}></Box>
            <Typography
              variant='h3'
              textAlign={'center'}
              color={'common.white'}
            >
              We're here to empower them.
            </Typography>
          </HeroImageContent>
        </HeroImage>
        <Box
          sx={{ height: '10vh', backgroundColor: color_theme.grayBgColor }}
        ></Box>
        <CustomSection bgStyle='gray' marginStyle='wide'>
          <Grid container alignItems='center'>
            <Grid item xs={12} sm={6} justifyContent={'left'}>
              <Typography
                variant='body1'
                align='left'
                gutterBottom
                justifyItems={'center'}
              >
                <strong>Modern technology</strong> suggests products to buy,
                shows to stream, and acquaintances to follow,
              </Typography>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={0} sm={5}>
              <img
                src="https://fintechreview.net/wp-content/uploads/2023/03/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvaXMxNjkyMS1pbWFnZS1rejJkeHU4My5qcGc.jpg"
                alt="Image that shows tech and people"
                style={{ maxWidth: imageWidth, alignSelf: "center" }}
                width={"100%"}
              />
            </Grid>
          </Grid>
          <Grid container alignItems='center'>
            <Grid item xs={0} sm={5}>
              <img
                src="images/about-page/volunteer.jpg"
                alt="Image that shows tech and people"
                style={{ maxWidth: imageWidth, alignSelf: "center" }}
                width={"100%"}
              />
            </Grid>
            <Grid item xs={0} sm={1}></Grid>
            <Grid item xs={12} sm={6} justifyContent={'right'}>
              <Typography
                variant='body1'
                align='right'
                gutterBottom
                justifyContent={'center'}
                style={{ wordWrap: 'break-word' }}
              >
                But it has not been harnessed to{' '}
                <strong>match us to nearby service experiences</strong> that
                best fit our abilities or interests.
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ height: '2rem' }} />
          <Typography variant='h5' align='center' gutterBottom>
            <strong>UNTIL NOW</strong>
          </Typography>
        </CustomSection>
        <CustomSection bgStyle='white' paddingY='large'>
          <Typography
            variant='h2'
            color={color_theme.primaryFontColor}
            align='center'
          >
            Our Mission
          </Typography>
          <Separator primary={false} />
          <Typography
            variant='body1'
            color={color_theme.primaryFontColor}
            align='center'
          >
            We harness cutting-edge technology to connect individuals with
            meaningful and impactful service activities.
          </Typography>
        </CustomSection>
        <CustomSection bgStyle='accent' paddingY='medium' marginStyle='wide'>
          <Typography variant='h1' align='center' gutterBottom>
            Our Vision
          </Typography>
          <Box sx={{ height: '20px ' }}></Box>
          <Typography variant='body1' align='center' gutterBottom>
            We aim to create a better world by inspiring a culture of service
            and enabling individuals everywhere to contribute positively to
            their community and beyond.
          </Typography>
        </CustomSection>
        <PhaseCarousel />
        <Container maxWidth={'xl'} sx={{ paddingY: 10 }}>
          <DuoLinks />
        </Container>

        <CustomContainer bgStyle='primary' paddingY='large'>
          <Typography
            variant='h2'
            color={color_theme.primaryFontColor}
            align='center'
          >
            Meet the People making this Vision a Reality
          </Typography>
          <Box sx={{ height: '20px ' }}></Box>
          <Link href='/people'>
            <Button
              size='medium'
              bgStyle='secondary'
              hoverStyle='light'
              // startIcon={<AddIcon />}
            >
              <Typography fontWeight={'bold'}>Our Team</Typography>
            </Button>
          </Link>
        </CustomContainer>
      </ThemeProvider>
    </>
  );
}

let phaseList = {
  'Phase 1': [
    'Search Engine in Greater New York Area',
    'Build database of nonprofit websites',
    'Leverage AI to organize data in support of keyword search and filtering',
    'Insert geolocation capabilities to support geographic parameters',
    'Optimize search experience',
  ],
  'Phase 2': [
    'Community Platform for Volunteers',
    'Support account creation',
    'Launch social-media platform that supports relationships and documenting/sharing media and posts',
    'Enhance nonprofit organizations’ presence and information',
  ],
  'Phase 3': [
    'Non-Search Search Experience',
    'Offer AI conversational experience to render appropriate volunteer opportunities',
    'Inject AI to provide volunteers with ‘intelligent’ customized recommendations of volunteer experiences',
    'Integrate attendance and registration tools for volunteer opportunities',
  ],
  'Phase 4': [
    'Develop additional regions',

    'Build database of nonprofits at additional target regions',
    'Leverage marketing/PR techniques to attract local volunteers and review nonprofit organization database',
    'Raise funds to ensure ongoing optimal site performance and scale functionality',
  ],
};

function returnIcon(index: number) {
  switch (index) {
    case 0:
      return <SearchIcon fontSize='inherit' />;
    case 1:
      return <VolunteerActivismIcon fontSize='inherit' />;
    case 2:
      return <SmartToyIcon fontSize='inherit' />;
    case 3:
      return <SouthAmericaIcon fontSize='inherit' />;
    default:
      return <SearchIcon fontSize='inherit' />;
  }
}

const PhaseCarousel = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

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

  let contentToShow: JSX.Element;
  if (isXs) {
    contentToShow = (
      <Carousel animation='fade' autoPlay={false} swipe={true}>
        {oppList}
      </Carousel>
    );
  } else {
    contentToShow = <Phases />;
  }

  return (
    <CustomContainer bgStyle='gray' paddingY='medium' marginStyle='narrow'>
      <Typography variant='h1' color={color_theme.fontColor} align='center'>
        Our Plan
      </Typography>
      <Separator primary={false} />
      <Typography
        variant='body1'
        color={color_theme.primaryFontColor}
        align='center'
      >
        We’re developing a program with natural language processing,
        crawling/scraping functionality, and database management to serve as the
        basis of our search engine.
      </Typography>
      <Box sx={{ height: '5vh ' }}></Box>

      {contentToShow}
    </CustomContainer>
  );
};

const HorizontalTimeline = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
});

const TimelineComponent = () => {
  return (
    <Timeline position='alternate'>
      {/* PHASE 1 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <SearchIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h3'>Phase 1</Typography>
          <Typography variant='h6'>
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
          <TimelineDot color='info'>
            <Typography variant='h6'>2</Typography>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h3'>Phase 2</Typography>
          <Typography variant='h6'>
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
          <TimelineDot color='primary'>
            <MdOutlineVolunteerActivism />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h3'>Phase 3</Typography>
          <Typography variant='h6'>Non-Search Search Experience</Typography>
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
          <TimelineDot color='info'>
            <Typography variant='h6'>4</Typography>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h3'>Phase 4</Typography>
          <Typography variant='h6'>Develop additional regions</Typography>
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

const steps = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'];

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
          <Typography textAlign='center' variant='h5'>
            Search Engine in greater NY region
          </Typography>
          <Typography component='div' textAlign='center'>
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
          <Typography textAlign='center' variant='h5'>
            Community Platform for Volunteers
          </Typography>
          <Typography component='div' textAlign='center'>
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
          <Typography textAlign='center' variant='h5'>
            Non-Search Search Experience
          </Typography>
          <Typography component='div' textAlign='center'>
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
          <Typography textAlign='center' variant='h5'>
            Develop additional regions
          </Typography>
          <Typography component='div' textAlign='center'>
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
  const [maxHeight, setMaxHeight] = useState<number | string | null>(null);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const phaseCardElements = document.querySelectorAll('.phase-card');
      let maxCardHeight = 0;

      phaseCardElements.forEach((element) => {
        maxCardHeight = Math.max(maxCardHeight, element.clientHeight);
      });

      setMaxHeight(maxCardHeight);
    };

    // Initial calculation
    calculateMaxHeight();

    const handleResize = () => {
      // Recalculate max height when the window is resized
      calculateMaxHeight();
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <PhaseCard
          title='Phase 1'
          icon={<SearchIcon fontSize='inherit' />}
          main='Search Engine in greater NY region'
          goals={[
            'Build database of nonprofit websites',
            'Leverage AI to organize data in support of keyword search and filtering',
            'Insert geolocation capabilities to support geographic parameters',
            'Optimize search experience',
          ]}
          style={maxHeight ? { minHeight: maxHeight } : {}}
          className='phase-card'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PhaseCard
          title='Phase 2'
          icon={<VolunteerActivismIcon fontSize='inherit' />}
          main='Community Platform for Volunteers'
          goals={[
            'Support account creation',
            'Launch social-media platform that supports relationships and documenting/sharing media and posts',
            'Enhance nonprofit organizations’ presence and information',
          ]}
          style={maxHeight ? { minHeight: maxHeight } : {}}
          className='phase-card'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PhaseCard
          title='Phase 3'
          icon={<SmartToyIcon fontSize='inherit' />}
          main='Non-Search Search Experience'
          goals={[
            'AI chat generates appropriate volunteer activities',
            'Machine learning provides volunteers with ‘intelligent’ customized recommendations ',
            'Volunteer registration and management tools support nonprofits',
          ]}
          style={maxHeight ? { minHeight: maxHeight } : {}}
          className='phase-card'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PhaseCard
          title='Phase 4'
          icon={<SouthAmericaIcon fontSize='inherit' />}
          main='Develop additional regions'
          goals={[
            'Build database of nonprofits at additional target regions',
            'Leverage marketing/PR techniques to attract local volunteers and review nonprofit organization database',
            'Raise funds to ensure ongoing optimal site performance and scale functionality',
          ]}
          style={maxHeight ? { minHeight: maxHeight } : {}}
          className='phase-card'
        />
      </Grid>
    </Grid>
  );
};

const PhaseCard = ({
  title,
  main,
  icon,
  goals,
  className,
  style,
}: {
  title: string;
  main: string;
  icon: React.ReactNode;
  goals: string[];
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    // big green icon
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 2,
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            backgroundColor: green[500],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '50px',
            color: 'rgb(255, 255, 255, 0.9)',
          }}
        >
          {icon}
        </Avatar>
      </Box>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='h5' sx={{ paddingBottom: 2 }}>
        {main}
      </Typography>
      <Card
        sx={{
          justifyContent: 'left',
          alignItems: 'left',
          textAlign: 'left',
        }}
        className={className}
        style={style}
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
    <Grid container spacing={2} paddingTop={'50px'}>
      <Grid item xs={12}>
        <Stepper activeStep={0} alternativeLabel orientation='horizontal'>
          {steps.slice(0, activeStepCount).map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={PhaseIcon2[steps.indexOf(label)]}>
                {' '}
              </StepLabel>
              <Typography textAlign='center' variant='h3'>
                {label}
              </Typography>
              <PhaseText step={steps.indexOf(label)} />
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={12}>
        <Stepper activeStep={-1} alternativeLabel orientation='horizontal'>
          {steps
            .slice(activeStepCount, activeStepCount + additional)
            .map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={PhaseIcon2[steps.indexOf(label)]}>
                  {' '}
                </StepLabel>
                <Typography textAlign='center' variant='h3'>
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
