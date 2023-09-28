import {
  Box,
  Container,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';

import JoinTheTeamForm from '../components/JoinTheTeamForm';
import MaterialTheme from '../components/MaterialTheme';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={MaterialTheme}>
      <>
        <Stack position={'relative'} height={'170vh'}>
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
            top={350}
          >
            {/* Join the Team Form */}
            <JoinTheTeamForm />
          </Stack>
        </Stack>
        <Container maxWidth={'xl'}>
          <Stack
            spacing={10}
            alignItems={'center'}
            py={5}
            height={'65vh'}
            width={'100%'}
          >
            <Stack
              width={'60%'}
              alignItems={'center'}
              boxShadow={5}
              borderRadius={2}
            >
              <Stack
                direction={'row'}
                height={400}
                spacing={5}
                py={2}
                px={6}
                width={'100%'}
              >
                <Stack
                  width={'50%'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  py={5}
                >
                  <img
                    src={`/images/quote3.png`}
                    alt=''
                    width={'280px'}
                    height={'280px'}
                  ></img>
                </Stack>

                <Stack
                  height={'100%'}
                  justifyContent={'center'}
                  width={'50%'}
                  spacing={2}
                  pr={2}
                >
                  <Typography
                    variant='body1'
                    align='left'
                    fontStyle={'italic'}
                    fontSize={24}
                  >
                    Help Us build the platform that will facilitate and
                    accelerate the improvements we need in the world around us.
                  </Typography>
                  <CustomButton
                    size='large'
                    bgStyle='primary'
                    hoverStyle='dark'
                    onClick={() => navigate('/donate')}
                  >
                    <Typography
                      variant={'h3'}
                      fontWeight={'bold'}
                      align='center'
                    >
                      Support Scout
                    </Typography>
                  </CustomButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default JoinUs;
