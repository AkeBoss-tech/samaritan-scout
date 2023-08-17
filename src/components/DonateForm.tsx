import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import theme from './Theme2';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import MaterialTheme from './MaterialTheme';
import Separator from './Separator';

const DonateForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
    donation: '',
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
          spacing={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
          paddingY={15}
        >
          <Grid item xs={12} sm={12}>
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
                  Donate
                </Typography>

                <Separator primary={false} />
              </Stack>
              <TextField
                fullWidth
                label='Full Name'
                variant='standard'
                InputProps={{ style: { fontSize: '18px' } }}
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                color='primary'
              />
              <TextField
                fullWidth
                label='Email Address'
                variant='standard'
                type='email'
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
                label='Donation Amount'
                type='number'
                variant='standard'
                InputProps={{ style: { fontSize: '18px' } }}
                name='donation'
                value={formData.donation}
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
            <FormControlLabel control={<Checkbox />} label="Yes, send me information on your next fundraising event" />
            <FormControlLabel control={<Checkbox />} label="Yes, contact me to discuss my donation" />
            <Typography variant="body2">VENMO @samaritan-scout</Typography>
              <Stack
                alignItems={{
                  xs: 'center',
                  sm: 'center',
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
          
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default DonateForm;
