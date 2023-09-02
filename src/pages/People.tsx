import '../pages/styles.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import MaterialTheme from '../components/MaterialTheme';
import PersonCard from '../components/PersonCard';
import peopleInfo from '../data/people.json';
import React from 'react';
import TeamContactForm from '../components/TeamContactForm';
import CustomSection from '../components/CustomSection';

const boardMembers: any = [];
const volunteers: any = [];

interface BoardMember {
  title: string;
  linkedin: string;
  image: string;
  description: string;
}
const boardOfDirectors: Record<string, BoardMember> = peopleInfo['boardMember'];

Object.keys(boardOfDirectors).forEach((name) => {
  const person = boardOfDirectors[name];
  boardMembers.push(
    <React.Fragment key={name}>
      <PersonCard
        type='boardMember'
        title={person.title}
        name={name}
        image={person.image}
        description={person.description}
      />
    </React.Fragment>
  );
});

const summerVolunteers: Record<string, BoardMember> = peopleInfo['volunteer'];

Object.keys(summerVolunteers).forEach((key) => {
  const value = summerVolunteers[key];
  volunteers.push(
    <React.Fragment key={key}>
      <PersonCard
        type={'volunteer'}
        title={value.title}
        name={key}
        description={value.description}
        image={value.image}
        link={value.linkedin}
      />
    </React.Fragment>
  );
});

function People() {
  // const theme1 = MaterialTheme;

  // const isXs = theme1.breakpoints.only('xs');
  // const isSm = theme1.breakpoints.only('sm');

  // const isMd = theme1.breakpoints.only('md');

  // const isLg = theme1.breakpoints.only('lg');

  // let imgHeight;

  // if (isXs) {
  //   imgHeight = '200px';
  // } else if (isSm) {
  //   imgHeight = '400px';
  // } else if (isMd) {
  //   imgHeight = '20rem';
  // } else if (isLg) {
  //   imgHeight = '500px';
  // } else {
  //   imgHeight = '500px';
  // }
  return (
    <>
      <ThemeProvider theme={MaterialTheme}>
        <img
          style={{
            filter: 'brightness(0.9)',
            width: '100%',
            height: '20rem',
            objectFit: 'cover',
          }}
          src='/images/hero-images/people-page-hero.jpeg'
          alt='a group of volunteers cheering'
        />
        <Container maxWidth='xl' sx={{ paddingTop: '100px' }}>
          <Stack gap={{ xs: 10, sm: 10, md: 15, lg: 15, xl: 15 }}>
            <Stack>
              <Typography
                variant='h2'
                gutterBottom
                sx={{
                  textAlign: 'start',
                  paddingX: {
                    xs: '5%',
                    md: '10%',
                    lg: '18%',
                    xl: '18%',
                  },
                }}
              >
                We are committed to optimizing the discovery of volunteer
                experiences. Together we can have impact, gain, skills, build
                community, and find joy.
              </Typography>
            </Stack>

            <Stack alignItems={'center'} gap={4}>
              <Typography
                variant='h1'
                gutterBottom
                sx={{
                  textAlign: 'center',
                }}
              >
                Meet Our Board of Directors
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}>
                {boardMembers}
              </Grid>
            </Stack>

            <Stack alignItems={'center'} gap={4}>
              <Typography
                variant='h1'
                gutterBottom
                sx={{
                  textAlign: 'center',
                }}
              >
                Meet Our Summer 2023 Interns
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}>
                {volunteers}
              </Grid>
            </Stack>
          </Stack>
        </Container>

        <TeamContactForm />
        <CustomSection bgStyle='white'>
          <Typography variant='h1' align='center'>
            Why volunteer with us?
          </Typography>
          <Box sx={{ height: '30px ' }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='h3' align='center' paddingBottom={2}>
                Effect a scalable impact
              </Typography>
              <Typography variant='body1' align='left'>
                "Here is where the quote goes"
              </Typography>
              <Typography variant='subtitle1' align='right'>
                - Akash Dubey
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='h3' align='center' paddingBottom={2}>
                Get inspired and inspire others
              </Typography>
              <Typography variant='body1' align='left'>
                "Here is where the quote goes"
              </Typography>
              <Typography variant='subtitle1' align='right'>
                - Akash Dubey
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='h3' align='center' paddingBottom={2}>
                Develop skills to advance your career
              </Typography>
              <Typography variant='body1' align='left'>
                "Here is where the quote goes"
              </Typography>
              <Typography variant='subtitle1' align='right'>
                - Akash Dubey
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant='h3' align='center' paddingBottom={2}>
                Collaborate with kind people
              </Typography>
              <Typography variant='body1' align='left'>
                "Here is where the quote goes"
              </Typography>
              <Typography variant='subtitle1' align='right'>
                - Akash Dubey
              </Typography>
            </Grid>
          </Grid>
        </CustomSection>
      </ThemeProvider>
    </>
  );
}

export default People;
