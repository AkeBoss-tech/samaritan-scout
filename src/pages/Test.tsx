import { Container, Stack } from '@mui/material';
import React from 'react';
import TeamContactForm from '../components/TeamContactForm';
import Contact from '../components/Contact';

const Test = () => {
  return (
    <div>
      <Stack>
        <Contact />
        <TeamContactForm />
      </Stack>
    </div>
  );
};

export default Test;
