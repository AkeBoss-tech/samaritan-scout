import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

// import theme from './Theme2';
import MaterialTheme from './MaterialTheme';
import Separator from './Separator';

const TeamContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });
  // TODO: Add validation for all fields
  // TODO: Add submitting effect to tell user the email is sent successfully
  // TODO: Add a loading effect to tell user the email is being sent
  // TODO: Add email sending function using mailJS

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
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={10}
            paddingY={15}
            paddingX={{ xs: 5, sm: 10, md: 10, lg: 10, xl: 15 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Stack gap={2}>
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
                    color='primary'
                    textTransform={'uppercase'}
                  >
                    Join The Effort
                  </Typography>
                  <Separator primary />
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
                  label='Message'
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
                      backgroundColor: 'primary.light',
                      height: '50px',
                      width: '160px',
                      ':hover': {
                        color: 'white',
                        backgroundColor: 'primary',
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
                  color='primary'
                  textAlign={'center'}
                  textTransform={'uppercase'}
                >
                  Support Our Work
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    color: 'black',
                    backgroundColor: 'primary.light',
                    height: '50px',
                    ':hover': {
                      color: 'white',
                      backgroundColor: 'primary',
                    },
                  }}
                  size='large'
                  href='donate'
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
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TeamContactForm;
