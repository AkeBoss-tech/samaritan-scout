import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomButton from './CustomButton';
import MaterialTheme from './MaterialTheme';
import { useNavigate } from 'react-router-dom';

const DuoLinks = () => {
  const theme1 = MaterialTheme;
  const isSm = useMediaQuery(theme1.breakpoints.only('sm'));
  const navigate = useNavigate();
  return (
    <Stack>
      <Grid
        container
        spacing={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}
        height={{
          xs: '100vh',
          sm: '50vh',
          md: '60vh',
          lg: '70vh',
          xl: '70vh',
        }}
      >
        <Grid item xs={12} sm={6} height={{ xs: '50%', sm: '100%' }}>
          <Stack height={'100%'} alignItems={'center'} spacing={4}>
            <Box
              sx={{
                backgroundImage: 'url(/images/join-the-team.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover',
              }}
              borderRadius={1}
              height={'100%'}
              width={'100%'}
            ></Box>
            <CustomButton
              size='large'
              bgStyle='primary'
              hoverStyle='dark'
              onClick={() => navigate('/joinus')}
            >
              <Typography
                variant={isSm ? 'body1' : 'h3'}
                fontWeight={'bold'}
                align='center'
              >
                Join the effort
              </Typography>
            </CustomButton>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} height={{ xs: '50%', sm: '100%' }}>
          <Stack height={'100%'} alignItems={'center'} spacing={4}>
            <Box
              sx={{
                backgroundImage: 'url(/images/support-us.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover',
              }}
              borderRadius={1}
              height={'100%'}
              width={'100%'}
            ></Box>
            <CustomButton
              size='large'
              bgStyle='primary'
              hoverStyle='dark'
              onClick={() => navigate('/donate')}
            >
              <Typography variant={isSm ? 'body1' : 'h3'} fontWeight={'bold'}>
                Support our work
              </Typography>
            </CustomButton>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DuoLinks;
