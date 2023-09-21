import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import PeoplePageData from '../data/people.json';
import JoinTheTeamForm from '../components/JoinTheTeamForm';
import MaterialTheme from '../components/MaterialTheme';
import Carousel from 'react-material-ui-carousel';

const JoinUs = () => {
  type Quote = {
    imagePath: string;
    title: string;
    author: string;
    quote: string;
  };
  const quotesObject: Record<string, Quote> = PeoplePageData['quotes'];
  return (
    <ThemeProvider theme={MaterialTheme}>
      <Container maxWidth='xl'>
        <Stack my={10} spacing={10} alignItems={'center'}>
          {/* Why volunteer with us? */}
          <Stack spacing={8} width={'60%'}>
            <Typography variant='h1' align='center'>
              Why Volunteer With Us?
            </Typography>
            <Carousel
              sx={{
                boxShadow:
                  '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 0px 6px -4px rgb(0 0 0 / 0.1);',
                borderRadius: '15px',
              }}
            >
              {Object.keys(quotesObject).map((key) => (
                <Stack direction={'row'} height={400} spacing={4} py={2} px={6}>
                  <img
                    src={`/images/${quotesObject[key].imagePath}`}
                    alt=''
                    width={'350px'}
                    height={'350px'}
                  ></img>
                  <Stack spacing={4} height={'100%'} justifyContent={'center'}>
                    <Typography variant='h2' align='left'>
                      {quotesObject[key].title}
                    </Typography>
                    <Stack spacing={2}>
                      <Typography
                        variant='body1'
                        align='left'
                        fontStyle={'italic'}
                      >
                        "{quotesObject[key].quote}"
                      </Typography>
                      <Typography variant='subtitle1' align='left'>
                        - {quotesObject[key].author}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Carousel>
          </Stack>

          {/* Join the Team Form */}
          <JoinTheTeamForm />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default JoinUs;
