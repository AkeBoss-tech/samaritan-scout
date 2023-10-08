import '../pages/styles.css';
import { ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MaterialTheme from '../components/MaterialTheme';
import PersonCard from '../components/PersonCard';
import PeoplePageData from '../data/people.json';
import DuoLinks from '../components/DuoLinks';

import Carousel from 'react-material-ui-carousel';
import { Icons } from '../components/Icons';
import { useEffect } from 'react';

interface PersonInfo {
  title: string;
  linkedin: string;
  image: string;
  description: string;
}

type Quote = {
  imagePath: string;
  title: string;
  author: string;
  quote: string;
};
const quotesObject: Record<string, Quote> = PeoplePageData['quotes'];

const boardMembersObject: Record<string, PersonInfo> =
  PeoplePageData['boardMembers'];
const volunteersObject: Record<string, PersonInfo> =
  PeoplePageData['volunteers'];

function People() {
  const theme1 = MaterialTheme;
  const isXs = useMediaQuery(theme1.breakpoints.only('xs'));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <ThemeProvider theme={MaterialTheme}>
        <Stack>
          <Stack
            width={'100%'}
            py={10}
            px={4}
            alignItems={'center'}
            justifyContent={'center'}
            bgcolor={'primary.light'}
          >
            <Typography
              variant='h1'
              gutterBottom
              sx={{
                textAlign: 'center',
              }}
            >
              We are committed to optimizing the discovery of volunteer
              experiences.
            </Typography>
          </Stack>
          <Container
            maxWidth='xl'
            sx={{ paddingBottom: '100px', paddingTop: '50px' }}
          >
            <Stack spacing={12}>
              {/* Board Members & Developing Team Members */}
              <Stack gap={{ xs: 10, sm: 10, md: 15, lg: 15, xl: 15 }}>
                {/* Board Members */}
                <Stack alignItems={'center'} spacing={4}>
                  <Typography
                    variant='h1'
                    gutterBottom
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    Meet Our Board of Directors
                  </Typography>
                  <Box>
                    <Grid container spacing={1}>
                      {Object.keys(boardMembersObject).map((key) => (
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={3}
                          lg={2.4}
                          xl={2.4}
                          key={key}
                        >
                          <PersonCard
                            type={'boardMembers'}
                            title={boardMembersObject[key].title}
                            name={key}
                            description={boardMembersObject[key].description}
                            image={boardMembersObject[key].image}
                            link={boardMembersObject[key].linkedin}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Stack>

                {/* Interns */}
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
                  <Box>
                    <Grid container spacing={1}>
                      {Object.keys(volunteersObject).map((key) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={key}>
                          <PersonCard
                            type={'volunteers'}
                            title={volunteersObject[key].title}
                            name={key}
                            description={volunteersObject[key].description}
                            image={volunteersObject[key].image}
                            link={volunteersObject[key].linkedin}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Stack>
              </Stack>

              {/* Why volunteer with us? */}
              <Stack width={'100%'} spacing={8} alignItems={'center'}>
                <Typography variant='h1' align='center'>
                  Why Volunteer With Us?
                </Typography>
                <Carousel
                  navButtonsAlwaysVisible={isXs ? false : true}
                  navButtonsAlwaysInvisible={isXs ? true : false}
                  animation='slide'
                  navButtonsProps={{
                    style: {
                      backgroundColor: 'white',
                      border: '2px solid grey',
                      color: 'grey',
                      opacity: 0.4,
                    },
                  }}
                  indicatorContainerProps={{
                    style: {
                      marginTop: '0px',
                      marginBottom: '5px',
                      // textAlign: 'right', // 4
                    },
                  }}
                  sx={{
                    boxShadow:
                      '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 0px 6px -4px rgb(0 0 0 / 0.1);',
                    borderRadius: '15px',
                    // width: '1000px',
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '90%',
                      xl: '70%',
                    },
                  }}
                >
                  {Object.keys(quotesObject).map((key) => (
                    <Stack width={'100%'} height={'100%'} alignItems={'center'}>
                      <Stack
                        width={{
                          xs: '100%',
                          sm: '90%',
                          md: '90%',
                          lg: '90%',
                          xl: '90%',
                        }}
                        direction={{
                          xs: 'column',
                          sm: 'column',
                          md: 'row',
                          lg: 'row',
                          xl: 'row',
                        }}
                        height={{
                          xs: '520px',
                          sm: '550px',
                          md: '400px',
                          lg: '400px',
                          xl: '400px',
                        }}
                        spacing={{ xs: 2, sm: 2, md: 4, lg: 6, xl: 8 }}
                        py={{ xs: 2, sm: 2, md: 4, lg: 6, xl: 6 }}
                        px={{ xs: 3, sm: 6, md: 6, lg: 6, xl: 6 }}
                      >
                        <Stack
                          width={{
                            xs: '100%',
                            sm: '100%',
                            md: '100%',
                            lg: '50%',
                            xl: '50%',
                          }}
                          alignItems={'center'}
                        >
                          <Typography
                            variant='h2'
                            align='center'
                            height={{
                              xs: '50px',
                              sm: '70px',
                              md: '80px',
                              lg: '80px',
                              xl: '80px',
                            }}
                          >
                            {quotesObject[key].title}
                          </Typography>
                          <Stack
                            sx={{
                              backgroundColor: 'primary.light',
                              borderRadius: '50%',
                            }}
                            display={{
                              xs: 'none',
                              sm: 'block',
                              md: 'block',
                              lg: 'block',
                              xl: 'block',
                            }}
                            width={{
                              xs: '150px',
                              sm: '150px',
                              md: '200px',
                              lg: '200px',
                              xl: '200px',
                            }}
                            p={{ xs: 4, sm: 4, md: 5, lg: 5, xl: 5 }}
                          >
                            <img
                              src={quotesObject[key].imagePath}
                              alt=''
                              width={'100%'}
                              height={'100%'}
                            ></img>
                          </Stack>
                        </Stack>

                        <Stack
                          width={{
                            xs: '100%',
                            sm: '100%',
                            md: '100%',
                            lg: '50%',
                            xl: '50%',
                          }}
                          spacing={2}
                        >
                          <Stack alignItems={'center'}>
                            <Icons.Quote
                              size={48}
                              color={MaterialTheme.palette.primary.light}
                            ></Icons.Quote>
                          </Stack>
                          <hr></hr>
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

              {/* Join the Team & Support Us Links */}
              <DuoLinks />

              {/* <Stack spacing={8}>
                <Typography variant='h1' align='center'>
                  Why Volunteer With Us?
                </Typography>
                <Box>
                  <Grid container spacing={4} paddingX={{ xs: 2, sm: 0 }}>
                    {Object.keys(quotesObject).map((key) => (
                      <Grid item xs={12} sm={6} md={3} key={key}>
                        <Stack
                          spacing={5}
                          height={{ sm: '100%', lg: '220px' }}
                          justifyContent={'space-between'}
                        >
                          <Typography variant='h3' align='left'>
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
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack> */}
            </Stack>
          </Container>
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default People;
