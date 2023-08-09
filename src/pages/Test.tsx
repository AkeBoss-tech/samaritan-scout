import { Container, Stack } from '@mui/material';
import React from 'react';
import TeamContactForm from '../components/TeamContactForm';

const Test = () => {
  return (
    <Container sx={{ height: 'auto' }}>
      <Stack>
        {/* <Contact /> */}
        <TeamContactForm />
      </Stack>
    </Container>
  );
};

export default Test;
