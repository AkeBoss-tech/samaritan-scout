import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
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
  Link,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TranslateIcon from '@mui/icons-material/Translate';

import './styles.css';
import color_theme from '../components/Theme';
import Separator from '../components/Separator';
import MaterialTheme from '../components/MaterialTheme';
import VolunteerCard from '../components/Card';
import Button from '../components/button';
import CustomContainer from '../components/CustomSection';
import Carousel from 'react-material-ui-carousel';

import opportunities from '../data/opportunities.json';
import React from 'react';
import { BiHome } from 'react-icons/bi';
import HeroImage from '../components/HeroImage';
import HeroImageContent from '../components/HeroImageContent';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  backgroundColor: color_theme.primaryBgColor,
  color: color_theme.primaryFontColor,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 63px)',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

function Home() {
  return (
    <div className='Home'>
      <ThemeProvider theme={MaterialTheme}>
        {/* <ReactHome /> */}
        <HeroImage
          imageSrc='https://dailytrojan.com/wp-content/uploads/2022/09/kelly-sikkema-XX2WTbLr3r8-unsplash-scaled.jpeg'
          fullScreen={true}
        >
          <HeroImageContent
            color='rgb(255,255,255, 0.5)'
            xPosition='center'
            yPosition='top'
            width='wide'
          >
            <Typography variant='h1' textAlign={'center'}>
              The web’s first search engine focused exclusively on finding ways
              we can help nonprofit organizations we care about is COMING SOON.
            </Typography>
          </HeroImageContent>
          <HeroImageContent
            color={'primary.light'}
            xPosition='center'
            yPosition='bottom'
            width='wide'
          >
            <Typography
              variant='h2'
              color={color_theme.primaryFontColor}
              align='center'
            >
              We have exciting volunteer opportunities for you!
            </Typography>
            <Box sx={{ height: '20px ' }}></Box>
            <Stack
              textAlign='center'
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Link href='/search'>
                <Button
                  size='medium'
                  bgStyle='secondary'
                  hoverStyle='light'
                  // startIcon={<AddIcon />}
                >
                  <Typography fontWeight={'bold'}>
                    Volunteer Near You
                  </Typography>
                </Button>
              </Link>
            </Stack>
          </HeroImageContent>
        </HeroImage>
        <Box sx={{ height: '20vh' }} />
        <RecentActivity />
        <VolunteerLove />
        <CustomContainer bgStyle='accent' paddingY='medium'>
          <Typography
            variant='h2'
            color={color_theme.primaryFontColor}
            align='center'
          >
            We’re making it easier for people and organizations to DO GOOD
          </Typography>
        </CustomContainer>
        <OtherStuff primary={false} />
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
    </div>
  );
}

function OtherStuff({ primary }: { primary: boolean }) {
  const bgColor = primary ? color_theme.primaryBgColor : color_theme.bgColor;
  const fontColor = primary
    ? color_theme.primaryFontColor
    : color_theme.fontColor;
  const theme1 = useTheme();
  const isXs = useMediaQuery(theme1.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme1.breakpoints.only('sm'));

  const imageWidth = isSm || isXs ? '90vw' : '45vw';

  const containerStyle = {
    paddingTop: '50px',
    paddingBottom: '50px',
    flex: 1,
    color: fontColor,
    backgroundColor: bgColor,
    display: 'flex', // Center the content vertically and horizontally
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <CustomContainer bgStyle='white' paddingY='small'>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={'center'}
            alignSelf={'center'}
          >
            <Typography
              variant='h2'
              align='left'
              color={fontColor}
              textAlign={'center'}
            >
              Harnessing the latest technology…
            </Typography>
            <Typography
              variant='body1'
              align='left'
              color={fontColor}
              textAlign={'center'}
            >
              to connect individuals with meaningful and impactful service
              activities
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} alignSelf={'center'}>
            <img
              src='https://media.istockphoto.com/id/1299624974/photo/futuristic-city-vr-wire-frame-with-group-of-people.jpg?s=612x612&w=0&k=20&c=Wf0Zroz23XgI-aDsF4bYNuRew_Jql-XjvECAGE0IIDo='
              alt='Image that shows tech and people'
              style={{ maxWidth: imageWidth }}
              width={'80%'}
            />
          </Grid>
        </Grid>
      </CustomContainer>
      <CustomContainer bgStyle='white' paddingY='small'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} alignSelf={'center'} maxWidth={'5'}>
            <img
              src='https://www.cio.com/wp-content/uploads/2023/05/iStock-654187068.jpg?quality=50&strip=all'
              alt='overburdened'
              style={{ maxWidth: imageWidth }}
              width={'80%'}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={'center'}
            alignSelf={'center'}
          >
            <Typography
              variant='h2'
              align='left'
              color={fontColor}
              textAlign={'center'}
            >
              Lightening the load on nonprofitable organizations and charities…
            </Typography>
            <Typography
              variant='body1'
              align='left'
              color={fontColor}
              textAlign={'center'}
            >
              Removing the burden of entering volunteer info on 3rd party static
              databases
            </Typography>
          </Grid>
        </Grid>
      </CustomContainer>
      <CustomContainer bgStyle='white' paddingY='small'>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid
            item
            xs={12}
            md={6}
            alignContent={'center'}
            alignSelf={'center'}
          >
            <Typography
              variant='h2'
              align='left'
              color={fontColor}
              textAlign={'center'}
            >
              Building community…
            </Typography>
            <Typography
              variant='body1'
              align='left'
              color={fontColor}
              textAlign={'center'}
            >
              Rooted in kindness and collaboration
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} alignSelf={'center'}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif'
              alt='Image that shows tech and people'
              style={{ maxWidth: imageWidth, alignSelf: 'center' }}
              width={'80%'}
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
    case 'Public':
      return <PublicIcon />;
    case 'Health':
      return <HealthAndSafetyIcon />;
    case 'Translate':
      return <TranslateIcon />;
    default:
      return <BiHome />;
  }
}

function RecentActivity() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

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
    <CustomContainer bgStyle='white' paddingY='medium' marginStyle='narrow'>
      <Typography variant='h1' color={color_theme.fontColor} align='center'>
        Recent Volunteer Activities
      </Typography>
      <Separator primary={false} />

      <Carousel animation='slide' stopAutoPlayOnHover={true}>
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
    <CustomContainer bgStyle='paper' paddingY='medium' marginStyle='narrow'>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          alignItems={'center'}
          textAlign={'center'}
          paddingBottom={{ xs: '50px' }}
        >
          <Box sx={{ height: { sm: '25%' } }}></Box>
          <Typography
            variant='h2'
            color={color_theme.primaryFontColor}
            align='center'
            paddingBottom='5px'
          >
            Volunteers Love Us!
          </Typography>
          <Box sx={{ height: '10%' }}></Box>
          <Link href='people'>
            <Button
              size='medium'
              bgStyle='primary'
              hoverStyle='dark'
              // startIcon={<AddIcon />}
            >
              <Typography fontWeight={'bold'}>Join Us!</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          justifyContent='center'
          alignItems='center'
          textAlign={'center'}
        >
          <VolunteerCard
            cause='Environment'
            volunteer='Trash Pickup'
            description='Help clean up the park and keep it beautiful for all to enjoy!'
            imageSrc='https://westernelite.com/wp-content/uploads/2022/04/historytrash-Large-1080x675.jpeg'
            icon={<PublicIcon />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          justifyContent='center'
          alignItems='center'
          textAlign={'center'}
        >
          <VolunteerCard
            cause='Environment'
            volunteer='Trash Pickup'
            description='Help clean up the park and keep it beautiful for all to enjoy!'
            imageSrc='https://westernelite.com/wp-content/uploads/2022/04/historytrash-Large-1080x675.jpeg'
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
      <CustomContainer bgStyle='white' paddingY='medium' marginStyle='wide'>
        <Typography variant='h2' color={color_theme.fontColor} align='center'>
          The web’s first search engine focused exclusively on finding ways we
          can help nonprofit organizations we care about is COMING SOON.
        </Typography>
      </CustomContainer>
    </>
  );
}

export default Home;
