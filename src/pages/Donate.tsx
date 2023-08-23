import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import DonateForm from "../components/DonateForm";
import Section from "../components/Section";
import MaterialTheme from "../components/MaterialTheme";
import color_theme from "../components/Theme";
import theme from "../components/Theme";

import { BsPaypal } from "react-icons/bs";

const Donate = () => {
  
  return (
    <div className="Home">
      <ThemeProvider theme={MaterialTheme}>
          {/* <Contact /> */}
          <Section
            title="SUPPORT SCOUT"
            children={[
              "Building a technology platform and maintaining it at scale requires a staff of fairly-paid professionals.",
              "Help Us build the platform that will facilitate and accelerate the improvements we need in the world around us",
            ]}
            cols={12}
            primary={true}
            separator={true}
            center={true}
          />
          
        <DonateForm />
      </ThemeProvider>
    </div>
  );
};

export default Donate;
