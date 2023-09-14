import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MaterialTheme from './MaterialTheme';
import CaptchaComponent from './CaptchaComponent';
import FeedbackModal from './FeedbackModal';

type FormData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
  positions: string[];
};

const JoinTheTeamForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
    positions: [],
  });

  const [positions, setPositions] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add error states and helper texts for each text field
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Clear the error state when the user starts typing
    if (name === 'firstName') {
      setFirstNameError(false);
    } else if (name === 'lastName') {
      setLastNameError(false);
    } else if (name === 'emailAddress') {
      setEmailError(false);
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    // Create a copy of the positions array
    const updatedPositions = [...positions];
    // If the checkbox is checked, add the position to the array; otherwise, remove it
    if (checked) {
      updatedPositions.push(name);
    } else {
      const index = updatedPositions.indexOf(name);
      if (index !== -1) {
        updatedPositions.splice(index, 1);
      }
    }
    setPositions(updatedPositions);

    setFormData((prevData) => ({
      ...prevData,
      positions: updatedPositions,
    }));
  };

  const handleSubmit = () => {
    setFormData((prevData) => ({
      ...prevData,
      positions: positions,
    }));
    console.log(positions);
    console.log(formData);

    let allPass = true;
    // Check for required fields and set error states if they are empty
    if (formData.firstName.trim() === '') {
      setFirstNameError(true);
      allPass = false;
    }
    if (formData.lastName.trim() === '') {
      setLastNameError(true);
      allPass = false;
    }
    if (formData.emailAddress.trim() === '') {
      setEmailError(true);
      allPass = false;
    }

    if (!allPass) {
      return;
    }

    openModal();
  };

  // Bot validation below
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
      <FeedbackModal
        open={isModalOpen}
        name='We will be in touch!'
        description='Thank you for your support in harnessing cutting edge technology to connect individuals with meaningful and impactful service activities. Together, we can accelerate positive change!'
        image={'join-the-team.jpeg'}
        onClose={closeModal}
      ></FeedbackModal>
      <Stack alignItems={'center'}>
        <Stack
          width={{
            xl: '800px',
            lg: '800px',
            md: '600px',
            sm: '70%',
            xs: '90%',
          }}
          spacing={4}
        >
          <Typography variant='h1' gutterBottom textAlign={'center'}>
            Join The Effort
          </Typography>
          <Box boxShadow={5} p={4} borderRadius={4}>
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
                    error={firstNameError} // Add error prop
                    helperText={firstNameError && 'First Name is required'}
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
                    error={lastNameError} // Add error prop
                    helperText={lastNameError && 'Last Name is required'}
                  />
                </Stack>
              </Stack>
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
                    error={emailError} // Add error prop
                    helperText={emailError && 'Email Address is required'}
                  />
                </Stack>
                <Stack width={{ xs: '100%', sm: '50%' }} spacing={1}>
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
              </Stack>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Search / Web Crawling Development'
                      onChange={handleCheckboxChange}
                      checked={positions.includes(
                        'Search / Web Crawling Development'
                      )}
                    />
                  }
                  label='Search / Web Crawling Development'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Front End Social Platform Development'
                      onChange={handleCheckboxChange}
                      checked={positions.includes(
                        'Front End Social Platform Development'
                      )}
                    />
                  }
                  label='Front End Social Platform Development'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Nonprofit Organization Relationship Building'
                      onChange={handleCheckboxChange}
                      checked={positions.includes(
                        'Nonprofit Organization Relationship Building'
                      )}
                    />
                  }
                  label='Nonprofit Organization Relationship Building'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Website Management'
                      onChange={handleCheckboxChange}
                      checked={positions.includes('Website Management')}
                    />
                  }
                  label='Website Management'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Strategy'
                      onChange={handleCheckboxChange}
                      checked={positions.includes('Strategy')}
                    />
                  }
                  label='Strategy'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Fundraising'
                      onChange={handleCheckboxChange}
                      checked={positions.includes('Fundraising')}
                    />
                  }
                  label='Fundraising'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='PR and Marketing'
                      onChange={handleCheckboxChange}
                      checked={positions.includes('PR and Marketing')}
                    />
                  }
                  label='PR and Marketing'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      size='small'
                      name='Other'
                      onChange={handleCheckboxChange}
                      checked={positions.includes('Other')}
                    />
                  }
                  label='Other'
                />
              </FormGroup>
              <Stack width={'100%'} spacing={1}>
                <Typography variant='body2' fontWeight={'bold'}>
                  How would yould you like to help Samaritan Scout to grow and
                  thrive?
                </Typography>
                <TextField
                  placeholder='Share your thoughts and inspirations with us'
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

export default JoinTheTeamForm;
