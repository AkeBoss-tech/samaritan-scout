import {
  Card,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
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
                boxShadow: '0 15px 40px 5px rgb(0 0 0 / 0.3)',
                borderRadius: '10px',
              }}
            >
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
                <Typography
                  variant='h4'
                >
                  VENMO @samaritan-scout 
                </Typography>
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
