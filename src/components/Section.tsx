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

import theme from './Theme';
import Separator from './Separator';

// const theme = {
//   bgColor: '#273225',
//   fontColor: 'white',
//   fontHoverColor: '#62B16E',
// };

const StyledTypography = styled(Typography)`
  font-size: 18px;
  cursor: pointer;
  /* text-transform: uppercase; */
`;

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
      <Typography
        variant='h3'
        fontWeight={'bold'}
        noWrap
        color={primary ? theme.primaryFontColor : theme.fontColor}
        align='center'
      >
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
