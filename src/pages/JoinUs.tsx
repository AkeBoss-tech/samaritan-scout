import { Box, Stack, ThemeProvider, Typography } from '@mui/material';

import JoinTheTeamForm from '../components/JoinTheTeamForm';
import MaterialTheme from '../components/MaterialTheme';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const JoinUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <ThemeProvider theme={MaterialTheme}>
      <>
        {/* Hero Image */}
        <Stack position={'relative'} height={'100%'}>
          <Box
            sx={{
              backgroundImage:
                'url(https://plus.unsplash.com/premium_photo-1683121334505-907a00cf904c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80)',
              backgroundSize: 'cover',
              objectFit: 'cover',
            }}
            height={{
              xs: '50vh',
              sm: '55vh',
              md: '60vh',
              lg: '60vh',
              xl: '70vh',
            }}
            alignContent={'center'}
          ></Box>
          <Stack
            spacing={10}
            alignItems={'center'}
            position={'absolute'}
            width={'100%'}
            height={'100%'}
            top={{ xs: 250, sm: 350, md: 280, lg: 280, xl: 350 }}
          >
            {/* Join the Team Form */}
            <JoinTheTeamForm />
          </Stack>
        </Stack>

        <Stack
          height={{
            xs: '1200px',
            sm: '1100px',
            md: '1010px',
            lg: '1010px',
            xl: '1015px',
          }}
        ></Stack>

        <Stack width={'100%'} alignItems={'center'} pb={10}>
          <Stack
            width={{
              xs: '90%',
              sm: '600px',
              md: '800px',
              lg: '1000px',
              xl: '1000px',
            }}
            height={{
              xs: '500px',
              sm: '300px',
              md: '400px',
              lg: '400px',
              xl: '400px',
            }}
            borderRadius={2}
            p={{ xs: 4, sm: 4, md: 7, lg: 7, xl: 7 }}
            direction={{
              xs: 'column',
              sm: 'row',
              md: 'row',
              lg: 'row',
              xl: 'row',
            }}
            spacing={{ xs: 4, sm: 3, md: 5, lg: 10, xl: 10 }}
            boxShadow={5}
          >
            <Stack
              width={{ xs: '100%', sm: '50%', md: '50%', lg: '50%', xl: '50%' }}
              height={{
                xs: '50%',
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '100%',
              }}
            >
              <img
                src='/images/join-us-page/support-us.jpeg'
                alt=''
                width={'100%'}
                height={'100%'}
                style={{
                  borderRadius: MaterialTheme.shape.borderRadius,
                  objectFit: 'cover',
                }}
              ></img>
            </Stack>
            <Stack
              width={{ xs: '100%', sm: '50%', md: '50%', lg: '50%', xl: '50%' }}
              height={'100%'}
              justifyContent={'space-between'}
            >
              <Typography
                variant='body1'
                fontSize={{ xs: 20, sm: 22, md: 28, lg: 28, xl: 28 }}
              >
                Help Us build the platform that will facilitate and accelerate
                the improvements we need in the world around us.
              </Typography>
              <Button
                size='large'
                bgStyle='primary'
                hoverStyle='dark'
                onClick={() => navigate('/donate')}
              >
                <Typography
                  variant='body1'
                  fontSize={'20px'}
                  fontWeight={'bold'}
                  align='center'
                >
                  Join the effort
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </>
    </ThemeProvider>
  );
};

export default JoinUs;
