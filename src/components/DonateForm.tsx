import {
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  Box,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import MaterialTheme from '../components/MaterialTheme';
import { useState } from 'react';
import Link from '@mui/material/Link';
import CaptchaComponent from '../components/CaptchaComponent';

import { BsPaypal } from 'react-icons/bs';
import { BiLogoVenmo } from 'react-icons/bi';
import { Container, Grid } from '@mui/material';
import theme from '../components/Theme';
import Button from './button';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    purpose: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });

  const [purpose, setPurpose] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Here you can perform actions like sending the form data to an API, etc.
    console.log(formData); // For demonstration purposes
  };

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaValue) {
      console.log('Captcha validated successfully:', captchaValue);
    } else {
      console.log('Please complete the captcha.');
    }
  };
  const bgColor = false ? theme.primaryBgColor : theme.bgColor;
  const fontColor = false ? theme.primaryFontColor : theme.fontColor;

  return (
    <ThemeProvider theme={MaterialTheme}>
      <Stack alignItems={'center'}>
        <Stack
          py={8}
          width={{
            xl: '800px',
            lg: '800px',
            md: '600px',
            sm: '70%',
            xs: '90%',
          }}
        >
          <Box
            sx={{
              padding: '30px',
              boxShadow: '0 5px 7px 5px rgb(0 0 0 / 0.3)',
              borderRadius: 2,
            }}
          >
            <Stack>
              <Container
                style={{
                  paddingTop: '20px',
                  flex: 1,
                  color: fontColor,
                  backgroundColor: bgColor,
                }}
                // maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
              >
                <Typography
                  variant='h1'
                  noWrap
                  color={fontColor}
                  align='center'
                >
                  Donate
                </Typography>
                <Box sx={{ height: '20px' }}></Box>
                <Typography
                  variant='body1'
                  align='left'
                  color={fontColor}
                  textAlign={'center'}
                >
                  Contact Us to arrange direct payment or donate through our{' '}
                  <Link
                    href='https://www.zeffy.com/en-US/fundraising/483d9853-1c2e-4f73-9a79-65a86eda23d5'
                    target='_blank'
                  >
                    Payment Page
                  </Link>
                </Typography>
              </Container>
              <Container
                style={{
                  paddingTop: '20px',
                  flex: 1,
                  color: theme.primaryFontColor,
                  backgroundColor: bgColor,
                }}
                // maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
              >
                <Typography
                  variant='h3'
                  noWrap
                  color={theme.primaryFontColor}
                  align='center'
                >
                  We also accept:
                </Typography>
                <Box sx={{ height: '10px' }}></Box>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    justifyContent='center'
                    alignItems='center'
                    textAlign={{ xs: 'center', sm: 'center' }}
                    paddingBottom={{ xs: '20px' }}
                  >
                    <Link
                      href='https://www.paypal.com/fundraiser/charity/4894555'
                      target='_blank'
                    >
                      <Button
                        size='small'
                        bgStyle='tertiary'
                        hoverStyle='light'
                        startIcon={<BsPaypal />}
                      >
                        <Typography
                          variant='body1'
                          color={theme.primaryFontColor}
                        >
                          PayPal
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                  {/* <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign="center" paddingBottom={{ xs: '20px' }}>
                  <Link href='https://www.zellepay.com/' target="_blank">
                  <Button size='small' bgStyle='tertiary' hoverStyle='light' startIcon={<SiZelle />}>
                    <Typography variant='body1' color={theme.primaryFontColor}>
                      Zelle
                    </Typography>
                  </Button>
                  </Link>
                </Grid> */}
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    justifyContent='center'
                    alignItems='center'
                    textAlign={{ xs: 'center', sm: 'center' }}
                    paddingBottom={{ xs: '20px' }}
                  >
                    <Link
                      href='https://account.venmo.com/u/samaritanscout'
                      target='_blank'
                    >
                      <Button
                        size='small'
                        bgStyle='tertiary'
                        hoverStyle='light'
                        startIcon={<BiLogoVenmo />}
                      >
                        <Typography
                          variant='body1'
                          color={theme.primaryFontColor}
                        >
                          Venmo
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Typography
                  variant='body1'
                  color={theme.primaryFontColor}
                  align='center'
                  paddingBottom={'20px'}
                >
                  Email:{' '}
                  <Link href='mailTo:donate@samaritanscout.org'>
                    donate@samaritanscout.org
                  </Link>
                </Typography>
                <Typography
                  variant='h5'
                  color={theme.primaryFontColor}
                  align='center'
                  paddingBottom={'20px'}
                >
                  UPCOMING EVENTS IN NEW YORK CITY, NEW JERSEY, FLORIDA AND
                  CALIFORNIA
                </Typography>
                <Typography
                  variant='body1'
                  color={theme.primaryFontColor}
                  align='center'
                >
                  Please contact us through the form below to attend one of our
                  upcoming in-person events or schedule a conversation about
                  making an impact with your generosity
                </Typography>
              </Container>
              <Box sx={{ height: '40px' }}></Box>
            </Stack>
            <Stack spacing={2}>
              {/* First Name and Last Name */}
              <Stack
                direction={{
                  xl: 'row',
                  lg: 'row',
                  md: 'row',
                  sm: 'row',
                  xs: 'column',
                }}
                spacing={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}
              >
                <Stack
                  width={{
                    xs: '100%',
                    sm: '50%',
                  }}
                  spacing={1}
                >
                  <Typography variant='body2'>First Name*</Typography>
                  <TextField
                    fullWidth
                    required
                    variant='outlined'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    size='small'
                  />
                </Stack>
                <Stack width={{ xs: '100%', sm: '50%' }} spacing={1}>
                  <Typography variant='body2'>Last Name*</Typography>
                  <TextField
                    fullWidth
                    required
                    variant='outlined'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    size='small'
                  />
                </Stack>
              </Stack>
              <Stack width={'100%'} spacing={1}>
                <Typography variant='body2'>I am</Typography>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  size='small'
                >
                  <MenuItem value={'volunteer'}>
                    Interested in Volunteering
                  </MenuItem>
                  <MenuItem value={'donate'}>Interested in Donating</MenuItem>
                  <MenuItem value={'organization'}>
                    Representing a non-profit organization
                  </MenuItem>
                  <MenuItem value={'press'}>
                    Press and interested in learning more
                  </MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                </Select>
              </Stack>
              <Stack width={'100%'} spacing={1}>
                <Typography variant='body2'>Email Address*</Typography>
                <TextField
                  placeholder='xxxxx@xxx.com'
                  fullWidth
                  required
                  variant='outlined'
                  name='emailAddress'
                  value={formData.emailAddress}
                  onChange={handleChange}
                  size='small'
                />
              </Stack>
              <Stack width={'100%'} spacing={1}>
                <Typography variant='body2'>Phone Number</Typography>
                <TextField
                  placeholder='201-699-8556'
                  fullWidth
                  variant='outlined'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  size='small'
                />
              </Stack>
              <Stack width={'100%'} spacing={1}>
                <Typography variant='body2'>Message</Typography>
                <TextField
                  placeholder='Write your problem, thought or advice to us'
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ my: 2 }}
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  size='small'
                />
              </Stack>
              <Stack>
                <FormControlLabel
                  control={<Checkbox size='small' />}
                  label='Yes, send me information on your next fundraising event'
                />
                <FormControlLabel
                  control={<Checkbox size='small' />}
                  label='Yes, contact me to discuss my donation'
                />
              </Stack>
              <form onSubmit={handleFormSubmit}>
                <CaptchaComponent
                  siteKey='6LegnLEnAAAAAJmmUCSU8JozUbzH9vzQMvhDwo4I'
                  onCaptchaChange={handleCaptchaChange}
                />
                {/* <button type='submit'>Submit</button> */}
              </form>
              * Your donation is 100% tax-deductible and will be applied
              exclusively to covering our technology-related expenses that are
              essential to building and maintaining the Scout Platform. You will
              receive all relevant paperwork to confirm your donation.
              <Button size='large' bgStyle='primary' hoverStyle='dark'>
                {' '}
                <Typography
                  variant='body1'
                  fontSize={'20px'}
                  fontWeight={'bold'}
                >
                  Send
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default Contact;
