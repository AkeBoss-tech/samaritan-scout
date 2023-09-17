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
import CustomButton from '../components/CustomButton';
import DuoLinks from '../components/DuoLinks';
import JoinTheTeamForm from '../components/JoinTheTeamForm';
import HeroImage from '../components/HeroImage';
import HeroImageContent from '../components/HeroImageContent';

interface PersonInfo {
  title: string;
  linkedin: string;
  image: string;
  description: string;
}

type Quote = {
  title: string;
  author: string;
  quote: string;
};

const boardMembersObject: Record<string, PersonInfo> =
  PeoplePageData['boardMembers'];
const volunteersObject: Record<string, PersonInfo> =
  PeoplePageData['volunteers'];
const quotesObject: Record<string, Quote> = PeoplePageData['quotes'];

function People() {
  return (
    <>
      <ThemeProvider theme={MaterialTheme}>
        <Stack>
          <HeroImage
            imageSrc='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc2lvbiUyMGxlZCUyMHVzJTIwaGVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
          >
            <HeroImageContent
              color='primary.light'
              xPosition='center'
              yPosition='bottom'
              width='wide'
            >
              <Typography
                variant='h3'
                textAlign={'center'}
              >
                We are a group of passionate students who are dedicated to making a difference in our community.
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
          <Container
            maxWidth='xl'
            sx={{ paddingBottom: '100px', paddingTop: '200px' }}
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
                  <Grid
                    container
                    spacing={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}
                  >
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
                  <Grid
                    container
                    spacing={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
                  >
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
                </Stack>
              </Stack>

              {/* Join the Team & Support Us Links */}
              <DuoLinks />

              {/* Why volunteer with us? */}
              <Stack spacing={8}>
                <Typography variant='h1' align='center'>
                  Why Volunteer With Us?
                </Typography>
                <Box>
                  <Grid container spacing={4} paddingX={{ xs: 2, sm: 0 }}>
                    {Object.keys(quotesObject).map((key) => (
                      <Grid item xs={12} sm={6} md={3} key={key}>
                        <Stack spacing={4}>
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
              </Stack>

              {/* Join the Team Form */}
              <JoinTheTeamForm />
            </Stack>
          </Container>
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default People;
