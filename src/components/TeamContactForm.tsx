import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import theme from './Theme2';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import MaterialTheme from './MaterialTheme';

const TeamContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Here you can perform actions like sending the form data to an API, etc.
    console.log(formData); // For demonstration purposes
  };

  return (
    <div>
      <ThemeProvider theme={MaterialTheme}>
        <Grid
          container
          spacing={{ xs: 10, sm: 10, md: 2, lg: 2, xl: 10 }}
          paddingY={15}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack gap={2} px={{ xs: 5, sm: 5, md: 5, lg: 2, xl: 0 }}>
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Typography
                  variant='h3'
                  fontSize={{
                    xs: '2.25rem',
                    sm: '2.25rem',
                    md: '2.5rem',
                    lg: '3rem',
                    xl: '3rem',
                  }}
                  fontWeight={'bold'}
                  noWrap
                  color={theme.primaryColor2}
                  textTransform={'uppercase'}
                >
                  Join The Effort
                </Typography>

                <Stack
                  width={'100%'}
                  alignItems='center'
                  spacing={2}
                  direction={'row'}
                >
                  <Box
                    sx={{ width: '100%' }}
                    borderBottom={`5px solid ${theme.primaryColor2}`}
                  ></Box>

                  <img
                    src={'/images/dog_silhouette.png'}
                    alt='dog'
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '7rem',
                      transform: 'scaleX(-1)',
                    }}
                  ></img>

                  <Box
                    sx={{ width: '100%' }}
                    borderBottom={`5px solid ${theme.primaryColor2}`}
                  ></Box>
                </Stack>
              </Stack>
              <TextField
                fullWidth
                label='Full Name'
                variant='standard'
                InputProps={{ style: { fontSize: '18px' } }}
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label='Email Address'
                variant='standard'
                InputProps={{ style: { fontSize: '18px' } }}
                name='emailAddress'
                value={formData.emailAddress}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label='Phone Number'
                variant='standard'
                InputProps={{ style: { fontSize: '18px' } }}
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label='Multiline'
                //   variant='standard'
                multiline
                rows={4}
                sx={{ my: 2 }}
                name='message'
                value={formData.message}
                onChange={handleChange}
              />
              <Stack
                alignItems={{
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
              >
                <Button
                  onClick={handleSubmit}
                  variant='contained'
                  sx={{
                    color: 'black',
                    backgroundColor: theme.primaryColor1,
                    height: '50px',
                    width: '160px',
                    ':hover': {
                      color: 'white',
                      backgroundColor: theme.secondaryColor2,
                    },
                  }}
                  size='large'
                >
                  <Typography
                    variant='body1'
                    fontSize={'20px'}
                    fontWeight={'bold'}
                  >
                    Send
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack
              width={'100%'}
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
              spacing={5}
            >
              <Typography
                variant={'h3'}
                fontSize={{
                  xs: '2.25rem',
                  sm: '2.25rem',
                  md: '2.5rem',
                  lg: '3rem',
                  xl: '3rem',
                }}
                fontWeight={'bold'}
                color={theme.primaryColor2}
                textAlign={'center'}
                textTransform={'uppercase'}
              >
                Support Our Work
              </Typography>
              <Button
                variant='contained'
                sx={{
                  color: 'black',
                  backgroundColor: theme.primaryColor1,
                  height: '50px',
                  ':hover': {
                    color: 'white',
                    backgroundColor: theme.secondaryColor2,
                  },
                }}
                size='large'
              >
                <Typography
                  variant='body1'
                  fontSize={'20px'}
                  fontWeight={'bold'}
                >
                  Make A Donation
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default TeamContactForm;
