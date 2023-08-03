import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// const theme = {
//   bgColor: '#273225',
//   fontColor: 'white',
//   fontHoverColor: '#62B16E',
// };

const theme = {
  bgColor: 'white',
  fontColor: 'black',
  fontHoverColor: '#62B16E',
};

const StyledTypography = styled(Typography)`
  font-size: 18px;
  cursor: pointer;
  /* text-transform: uppercase; */
`;

function Navbar() {
  // Used for opening and cloing narbar menu on mobile device
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setIsDrawerOpen(open);
    };

  // Get breakpoints for responsive design
  const theme1 = useTheme();
  const isMd = useMediaQuery(theme1.breakpoints.only('md'));
  const isLg = useMediaQuery(theme1.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme1.breakpoints.only('xl'));

  // Navbar menu items and links
  const menuItems = [
    { label: 'Search', link: '/' },
    { label: 'About', link: '/about' },
    // { label: 'Contact', link: '/contact' },
    { label: 'Donate', link: '/donate' },
  ];

  // Get current route for indicating navbar items
  const location = useLocation();
  const isActiveRoute = (route: string) => {
    return location.pathname === route;
  };

  return (
    <AppBar
      position='sticky'
      sx={{ top: 0, zIndex: 999, backgroundColor: theme.bgColor }}
    >
      <Container maxWidth='xl'>
        {isXl || isLg || isMd ? (
          <Stack
            direction='row'
            spacing={2}
            sx={{
              height: 40,
              pt: 2,
              pb: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction='row' spacing={2} alignItems={'center'}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <img
                  src={'/images/lacy-dog-square.jpg'}
                  alt='logo'
                  style={{
                    display: 'block',
                    height: '45px',
                    width: 'auto',
                    borderRadius: '12px',
                  }}
                />
              </Link>

              <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography
                  variant='h6'
                  fontWeight={'bold'}
                  noWrap
                  color={theme.fontColor}
                >
                  Samaritan Scout
                </Typography>
              </Link>
            </Stack>

            <Stack
              direction='row'
              spacing={4}
              sx={{ justifyContent: 'flex-end' }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.link}
                  style={{ textDecoration: 'none' }}
                >
                  <StyledTypography
                    variant='h6'
                    noWrap
                    sx={{
                      color: isActiveRoute(item.link)
                        ? theme.fontHoverColor
                        : theme.fontColor,
                      borderBottom: `2px solid ${
                        isActiveRoute(item.link)
                          ? theme.fontHoverColor
                          : theme.bgColor
                      }`,
                      transition: 'border-bottom 0.2s ease, color 0.2s ease',
                      '&:hover': {
                        color: theme.fontHoverColor,
                        borderBottom: `2px solid ${theme.fontHoverColor}`,
                      },
                    }}
                  >
                    {item.label}
                  </StyledTypography>
                </Link>
              ))}
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction='row'
            spacing={2}
            sx={{
              height: 40,
              pt: 2,
              pb: 2,
              pl: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* TODO: Change the title to the page title */}
            <StyledTypography
              variant='h6'
              fontWeight={'bold'}
              noWrap
              color={theme.fontColor}
            >
              {isActiveRoute('/')
                ? 'Search'
                : isActiveRoute('/about')
                ? 'About Us'
                : isActiveRoute('/contact')
                ? 'Contact'
                : isActiveRoute('/donate')
                ? 'Donate'
                : 'Samaritan Scout'}
            </StyledTypography>
            <Stack direction='row' alignItems='center'>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon fontSize='large' sx={{ color: theme.fontColor }} />
              </IconButton>
              <Drawer
                anchor={'top'}
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  width={'auto'}
                  role='presentation'
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  bgcolor={theme.bgColor}
                  pl={5}
                  pr={5}
                  py={5}
                >
                  <Stack direction='row' spacing={2}>
                    <IconButton
                      onClick={toggleDrawer(false)}
                      sx={{ marginLeft: 'auto', marginRight: '0' }}
                    >
                      <CloseIcon
                        fontSize='large'
                        sx={{ color: theme.fontColor }}
                      />
                    </IconButton>
                  </Stack>
                  <Stack direction='column' spacing={2}>
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.link}
                        style={{ textDecoration: 'none' }}
                      >
                        <StyledTypography
                          variant='h6'
                          noWrap
                          sx={{
                            display: 'inline',
                            color: isActiveRoute(item.link)
                              ? theme.fontHoverColor
                              : theme.fontColor,
                            borderBottom: `2px solid ${
                              isActiveRoute(item.link)
                                ? theme.fontHoverColor
                                : theme.bgColor
                            }`,
                            transition:
                              'border-bottom 0.2s ease, color 0.2s ease',
                            '&:hover': {
                              color: theme.fontHoverColor,
                              borderBottom: `2px solid ${theme.fontHoverColor}`,
                            },
                          }}
                        >
                          {item.label}
                        </StyledTypography>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Drawer>
            </Stack>
          </Stack>
        )}
      </Container>
    </AppBar>
  );
}

export default Navbar;
