import {
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem, Checkbox,
  FormControlLabel
} from '@mui/material';
import MaterialTheme from '../components/MaterialTheme';
import { useState } from 'react';
import Link from '@mui/material/Link';
import CaptchaComponent from '../components/CaptchaComponent';

import { BsPaypal } from "react-icons/bs";
import { SiZelle } from "react-icons/si";
import { BiLogoVenmo } from "react-icons/bi";
import {
  Container,
  Grid
} from "@mui/material";
import theme from "../components/Theme";


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
                borderRadius: '10px',
              }}
            >
              <Stack>
            <Container
              style={{
                paddingTop: "20px",
                flex: 1,
                color: fontColor,
                backgroundColor: bgColor,
              }}
              // maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
            >
              <Typography variant="h1" noWrap color={fontColor} align="center">
                Donate
              </Typography>
              <Box sx={{ height: '20px' }}></Box>
              <Typography
                variant="body1"
                align="left"
                color={fontColor}
                textAlign={"center"}
              >
                Contact Us to arrange direct payment or donate through our <Link href="https://www.zeffy.com/en-US/fundraising/483d9853-1c2e-4f73-9a79-65a86eda23d5" target="_blank">Payment Page</Link>
              </Typography>
            </Container>
            <Container
              style={{
                paddingTop: "20px",
                flex: 1,
                color: theme.primaryFontColor,
                backgroundColor: bgColor,
              }}
              // maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
            >
              <Typography variant="h3" noWrap color={theme.primaryFontColor} align="center">
                We also accept:
              </Typography>
              <Box sx={{ height: '10px' }}></Box>
              <Grid container>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign={{xs:"center", sm: "right"}} paddingBottom={{ xs: '20px' }}>
                  <Link href='https://www.paypal.com' target="_blank"><Button variant="outlined" size="large"> <BsPaypal /> </Button></Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign="center" paddingBottom={{ xs: '20px' }}>
                  <Link href='https://www.zellepay.com/' target="_blank"><Button variant="outlined" size="large"><SiZelle /></Button></Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign={{xs:"center", sm: "left"}} paddingBottom={{ xs: '20px' }}>
                  <Link href='https://account.venmo.com/u/samaritanscout' target="_blank"><Button variant="outlined" size="large"><BiLogoVenmo /></Button></Link>
                </Grid>
              </Grid>
              <Typography variant="body1" color={theme.primaryFontColor} align="center" paddingBottom={'20px'}>
                Email: <Link href="mailTo:donate@samaritanscout.org">donate@samaritanscout.org</Link>
              </Typography>
              <Typography variant="h5" color={theme.primaryFontColor} align="center" paddingBottom={'20px'}>
              UPCOMING EVENTS IN NEW YORK CITY, NEW JERSEY, FLORIDA AND CALIFORNIA 
              </Typography>
              <Typography variant="body1" color={theme.primaryFontColor} align="center">
                Please contact us through the form below to attend one of our upcoming in-person events or schedule a conversation about making an impact with your generosity 
              </Typography>

            </Container>
            <Box sx={{ height: '40px' }}></Box>
          </Stack>
              <Stack spacing={4}>
                <Stack
                  direction={{
                    xl: 'row',
                    lg: 'row',
                    md: 'row',
                    sm: 'row',
                    xs: 'column',
                  }}
                  spacing={4}
                >
                  <TextField
                    fullWidth
                    label='First Name'
                    variant='outlined'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    size='small'
                  />
                  <TextField
                    fullWidth
                    label='Last Name'
                    variant='outlined'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    size='small'
                  />
                </Stack>

                <FormControl fullWidth size='small'>
                  <InputLabel id='demo-simple-select-label'>I am...</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={purpose}
                    label='purpose'
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
                </FormControl>

                <TextField
                  fullWidth
                  label='Email Address'
                  variant='outlined'
                  name='emailAddress'
                  value={formData.emailAddress}
                  onChange={handleChange}
                  size='small'
                />
                <TextField
                  fullWidth
                  label='Phone Number'
                  variant='outlined'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  size='small'
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
                  size='small'
                />
                <FormControlLabel control={<Checkbox />} label="Yes, send me information on your next fundraising event" />
                <FormControlLabel control={<Checkbox />} label="Yes, contact me to discuss my donation" />
                <form onSubmit={handleFormSubmit}>
                  <CaptchaComponent
                    siteKey='6LegnLEnAAAAAJmmUCSU8JozUbzH9vzQMvhDwo4I'
                    onCaptchaChange={handleCaptchaChange}
                  />
                  {/* <button type='submit'>Submit</button> */}
                </form>
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
            </Box>
          </Stack>
        </Stack>
    </ThemeProvider>
  );
};

export default Contact;
