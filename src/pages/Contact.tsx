import {
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  Button,
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

  return (
    <ThemeProvider theme={MaterialTheme}>
      <Stack>
        <Stack
          height={250}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={5}
          bgcolor={'primary.light'}
        >
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
            Contact Us
          </Typography>
          <Stack alignItems={'center'} spacing={2} px={5}>
            <Typography variant='h4' color='primary' textAlign={'center'}>
              Thank you for your interest in learning more about Samaritan Scout
              !
            </Typography>
            <Link
              href='mailto:infor@samaritanscout.org'
              sx={{
                textDecoration: 'none',
                ':hover': { color: 'secondary.light' },
              }}
            >
              infor@samaritanscout.org
            </Link>
          </Stack>
        </Stack>
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
            <Box boxShadow={5} p={4} borderRadius={2}>
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
                      placeholder='Smith'
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
                      placeholder='Davidson'
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
                    placeholder='info@youremail.com'
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
                    placeholder='xxx-xxx-xxxx'
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
                    placeholder='Write your message'
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
      </Stack>
    </ThemeProvider>
  );
};

export default Contact;
