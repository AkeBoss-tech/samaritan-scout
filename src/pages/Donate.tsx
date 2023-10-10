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
import React, { useEffect } from "react";
import DonateForm from "../components/DonateForm";
import Section from "../components/Section";
import MaterialTheme from "../components/MaterialTheme";
import color_theme from "../components/Theme";
import theme from "../components/Theme";

import { BsPaypal } from "react-icons/bs";
import HeroImage from "../components/HeroImage";
import HeroImageContent from "../components/HeroImageContent";

const Donate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="Home">
      <ThemeProvider theme={MaterialTheme}>
        {/* <Contact /> */}
        <HeroImage imageSrc="https://as1.ftcdn.net/v2/jpg/04/27/16/28/1000_F_427162848_VBO97dWvevZsfWP029wVEFbsONz2evIz.jpg">
          <HeroImageContent
            color={theme.paperBgColor}
            xPosition="extra-left"
            yPosition="center"
            width="half"
          >
            <Typography variant="h1" textAlign={"center"}>
              Support Scout
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Building a technology platform and maintaining it at scale
              requires a staff of fairly-paid professionals.
            </Typography>
            <Box sx={{ height: "20px" }}></Box>
            <Typography variant="h5" textAlign={"center"}>
              Help Us build the platform that will facilitate and accelerate the
              improvements we need in the world around us
            </Typography>
          </HeroImageContent>
        </HeroImage>
        <Box sx={{ height: "15vh" }}></Box>
        {/* <Section
            title="SUPPORT SCOUT"
            children={[
              "Building a technology platform and maintaining it at scale requires a staff of fairly-paid professionals.",
              "Help Us build the platform that will facilitate and accelerate the improvements we need in the world around us",
            ]}
            cols={12}
            primary={true}
            separator={true}
            center={true}
          /> */}

        <DonateForm />
      </ThemeProvider>
    </div>
  );
};

export default Donate;
