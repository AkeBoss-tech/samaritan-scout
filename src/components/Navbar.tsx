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
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MaterialTheme from './MaterialTheme';

const StyledTypography = styled(Typography)`
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 4px;
`;

function Navbar() {
  // Used for opening and cloing narbar menu on mobile device
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setIsDrawerOpen(open);
    };

  // Get breakpoints for responsive design
  const theme1 = MaterialTheme;
  const isMd = useMediaQuery(theme1.breakpoints.only('md'));
  const isLg = useMediaQuery(theme1.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme1.breakpoints.only('xl'));

  // Navbar menu items and links
  const menuItems = [
    { label: 'Search', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'People', link: '/people' },
    { label: 'Donate', link: '/donate' },
  ];

  // Get current route for indicating navbar items
  const location = useLocation();
  const isActiveRoute = (route: string) => {
    return location.pathname === route;
  };

  return (
    <ThemeProvider theme={MaterialTheme}>
      <AppBar
        position='sticky'
        sx={{ top: 0, zIndex: 999, backgroundColor: 'primary' }}
      >
        <Container maxWidth='xl' sx={{ height: 75, alignItems: 'center' }}>
          {isXl || isLg || isMd ? (
            <Stack
              direction='row'
              spacing={2}
              sx={{
                height: '100%',
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
                      height: '50px',
                      width: 'auto',
                      borderRadius: '50%',
                    }}
                  />
                </Link>

                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Typography
                    variant='h6'
                    fontWeight={'bold'}
                    noWrap
                    color='secondary'
                    textTransform={'uppercase'}
                    letterSpacing={2}
                  >
                    Samaritan Scout
                  </Typography>
                </Link>
              </Stack>

              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'flex-end' }}
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.link}
                    style={{ textDecoration: 'none' }}
                  >
                    <StyledTypography
                      noWrap
                      sx={{
                        color: isActiveRoute(item.link)
                          ? 'primary.main'
                          : 'white',
                        bgcolor: isActiveRoute(item.link)
                          ? 'primary.light'
                          : 'transparent',
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'white',
                          transition:
                            'background-color 0.3s ease-out, color 0.3s ease-out',
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
                height: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <StyledTypography fontWeight={'bold'} noWrap color={'white'}>
                {isActiveRoute('/')
                  ? 'Search'
                  : isActiveRoute('/about')
                  ? 'About Us'
                  : isActiveRoute('/people')
                  ? 'People'
                  : isActiveRoute('/donate')
                  ? 'Donate'
                  : 'Samaritan Scout'}
              </StyledTypography>
              <Stack direction='row' alignItems='center'>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon fontSize='medium' sx={{ color: 'white' }} />
                </IconButton>
                <Drawer
                  anchor={'top'}
                  open={isDrawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    bgcolor='primary.main'
                    px={2}
                    pt={2}
                    pb={6}
                  >
                    <Stack>
                      <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{ marginLeft: 'auto', marginRight: '0' }}
                      >
                        <CloseIcon fontSize='medium' sx={{ color: 'white' }} />
                      </IconButton>
                    </Stack>
                    <Stack direction='column' spacing={2} alignItems={'center'}>
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
                                ? 'primary.main'
                                : 'white',
                              bgcolor: isActiveRoute(item.link)
                                ? 'primary.light'
                                : 'transparent',
                              '&:hover': {
                                color: 'primary.main',
                                bgcolor: 'white',
                                transition:
                                  'background-color 0.3s ease-out, color 0.3s ease-out',
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
    </ThemeProvider>
  );
}

export default Navbar;
