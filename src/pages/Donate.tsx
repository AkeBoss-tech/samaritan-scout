import { Container, Stack, ThemeProvider } from '@mui/material';
import React from 'react';
import DonateForm from '../components/DonateForm';
import Section from '../components/Section';
import MaterialTheme from '../components/MaterialTheme';
import color_theme from '../components/Theme';

const Donate = () => {
  return (
    <div className="Home">
      <ThemeProvider theme={MaterialTheme}>
      <Container sx={{ paddingTop: "10px",
            paddingBottom: "50px",
            flex: 1,
            color: color_theme.primaryFontColor,
            backgroundColor: color_theme.bgColor,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center", }}>
      <Stack>
        {/* <Contact /> */}
        <Section 
            title="SUPPORT SCOUT"
            children={["Building a technology platform and maintaining it at scale requires a staff of fairly-paid professionals.", "Help Us build the platform that will facilitate and accelerate the improvements we need in the world around us"]}
            cols={12}
            primary={true}
            separator={true}
        />
        <DonateForm />
      </Stack>
    </Container>
      </ThemeProvider>
    </div>
    
  );
};

export default Donate;
