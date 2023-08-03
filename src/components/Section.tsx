import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import FacebookIcon from '@mui/icons-material/Facebook';

// const theme = {
//   bgColor: '#273225',
//   fontColor: 'white',
//   fontHoverColor: '#62B16E',
// };

const theme = {
  bgColor: 'white',
  fontColor: 'black',
  fontHoverColor: '#62B16E',
  separatorColor: '#62B16E',
  primaryBgColor: '#62B16E',
  primaryFontColor: 'white',
};

const StyledTypography = styled(Typography)`
  font-size: 18px;
  cursor: pointer;
  /* text-transform: uppercase; */
`;

function Separator({primary} : {primary: boolean}) {
  const fontColor = primary ? theme.primaryFontColor : theme.fontColor;

  return (
    <Container
      style={{
        flex: 1,
        paddingBottom: '50px',
      }}
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2} md={2}>
        </Grid>
        <Grid item xs={3} md={3} color={fontColor}>
          <Divider color={fontColor} sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid item xs={2} md={2} textAlign={'center'}>
          <img
            src={"/images/dog_silhouette.png"}
            alt="dog"
            style={{
              width: '100%', 
              height: 'auto',
              maxWidth: "7rem",
              transform: 'scaleX(-1)',
            }}
          ></img>
        </Grid>
        <Grid item xs={3} md={3} color={fontColor}>
          <Divider color={fontColor} sx={{ borderBottomWidth: 5 }} />
        </Grid>
      </Grid>
    </Container>
  );
}

function Section({title, children, cols, primary, separator} : {title: string, children: Array<string>, cols: number, primary: boolean, separator: boolean}) {
  // Get breakpoints for responsive design
  const theme1 = useTheme();

  const bgColor = primary ? theme.primaryBgColor : theme.bgColor;
  const fontColor = primary ? theme.primaryFontColor : theme.fontColor;

  return (
    <Container
      style={{
        paddingTop: '50px',
        paddingBottom: '50px',
        flex: 1,
        color: fontColor,
        backgroundColor: bgColor,
      }}
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        {title}
      </Typography>

      {separator ? <Separator primary={primary} /> : null}

      <Grid container spacing={2}>
        {children.map((child) => (
          <Grid item xs={12} md={cols}>
          <Typography variant="body1" align="left" color={fontColor} className="lead" textAlign={'center'}>
            { child }
          </Typography>
        </Grid>
        ))
        }
      </Grid>
    </Container>
  );
}

export default Section;
