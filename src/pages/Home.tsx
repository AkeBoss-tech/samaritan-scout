import './App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';


const theme = createTheme();

// Code from https://mui.com/ with some modifications

function Home() {
  return (
    <div className="Home">
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
      <img src="/logo.svg" className="Home-logo" alt="logo" />
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

export default Home;
