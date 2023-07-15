import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';


const theme = createTheme();
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// Code from https://mui.com/ with some modifications

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <HomeSearch />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

function HomeSearch() {
  return (
    <Container sx={{ backgroundColor: 'lightgray', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'text.primary' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Samaritan Scout
      </h1>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Search"
          variant="outlined"
          placeholder="Enter Key Words ..."
          id="outlined-uncontrolled"
          color="primary"
          size="medium"
          sx={{ width: '400px', mr: '10px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" href="https://samaritanscout.org" target="_blank" rel="noopener noreferrer" size="medium">
                  <SendIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
}



function Navbar() {
  // All of this stuff is from here https://mui.com/material-ui/react-app-bar/
  // idk how any of it works
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ justifyContent: 'space-between', backgroundColor: 'lightgray', color: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <CameraIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SAMARITAN SCOUT
            </Typography>
            <Stack direction="row" alignItems="center">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


function Copyright() {
  // This is from a random example on the MUI website
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'© '}
      <Link color="inherit" href="https://samaritanscout.org/">
        Samaritan Scout
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Samaritan Scout
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        A Search Engine like no other!
      </Typography>
      <Copyright />
    </Box>
  );
}

export default App;
