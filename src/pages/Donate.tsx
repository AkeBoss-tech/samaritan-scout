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

const Donate = () => {
  const bgColor = false ? theme.primaryBgColor : theme.bgColor;
  const fontColor = false ? theme.primaryFontColor : theme.fontColor;
  return (
    <div className="Home">
      <ThemeProvider theme={MaterialTheme}>
        <Stack>
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
          />
          <Stack>
            <Container
              style={{
                paddingTop: "50px",
                flex: 1,
                color: fontColor,
                backgroundColor: bgColor,
              }}
              maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
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
                paddingTop: "50px",
                flex: 1,
                color: theme.primaryFontColor,
                backgroundColor: bgColor,
              }}
              maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
            >
              <Typography variant="h3" noWrap color={theme.primaryFontColor} align="center">
                We also accept:
              </Typography>
              <Box sx={{ height: '20px' }}></Box>
              <Grid container>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign={{xs:"center", sm: "right"}} paddingBottom={{ xs: '20px' }}>
                  <Link href='https://www.paypal.com' target="_blank"><Button variant="outlined">PayPal</Button></Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign="center" paddingBottom={{ xs: '20px' }}>
                  <Link href='www.paypal.com' target="_blank"><Button variant="outlined">Zelle</Button></Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} justifyContent="center" alignItems="center" textAlign={{xs:"center", sm: "left"}} paddingBottom={{ xs: '20px' }}>
                  <Link href='www.paypal.com' target="_blank"><Button variant="outlined">Venmo</Button></Link>
                </Grid>
              </Grid>
              <Typography variant="body1" color={theme.primaryFontColor} align="center" paddingBottom={'80px'}>
                Email: <Link href="mailTo:donate@samaritanscout.org">donate@samaritanscout.org</Link>
              </Typography>
              <Typography variant="h5" color={theme.primaryFontColor} align="center" paddingBottom={'20px'}>
              UPCOMING EVENTS IN NEW YORK CITY, NEW JERSEY, FLORIDA AND CALIFORNIA 
              </Typography>
              <Typography variant="body1" color={theme.primaryFontColor} align="center">
                Please contact us through the form below to attend one of our upcoming in-person events or schedule a conversation about making an impact with your generosity 
              </Typography>

            </Container>
          </Stack>
        </Stack>
        <DonateForm />
      </ThemeProvider>
    </div>
  );
};

export default Donate;
