import '../pages/styles.css'
import Section from '../components/Section';
import color_theme from "../components/Theme";
import styled, { ThemeProvider } from 'styled-components';
import { Box, Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MaterialTheme from '../components/MaterialTheme';
import Seperator from '../components/Separator';
import PersonCard from '../components/PersonCard';
import peopleInfo from '../people.json';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const boardMembers: any = [];
const volunteers: any = [];

interface BoardMember {
  linkedin: string;
  job: string;
  image: string;
}
const boardOfDirectors: Record<string, BoardMember> = peopleInfo["Meet Our Board Of Directors"];

Object.keys(boardOfDirectors).forEach((key) => {
  const value = boardOfDirectors[key];
  boardMembers.push(
    <React.Fragment key={key}>
      <PersonCard
        type={"boardMember"}
        job={value.job}
        name={key}
        image={value.image}
      />
    </React.Fragment>
  );

  if (boardMembers.length % 3 === 0) {
    boardMembers.push(<Filler key={`filler-${boardMembers.length}`} />);
  }
});

const summerVolunteers: Record<string, BoardMember> = peopleInfo["Summer 2023 Interns"];

Object.keys(summerVolunteers).forEach((key) => {
  const value = summerVolunteers[key];
  volunteers.push(
    <React.Fragment key={key}>
      <PersonCard
        type={"volunteer"}
        job={value.job}
        name={key}
        image={value.image}
        link = {value.linkedin}
      />
    </React.Fragment>
  );
});

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
    backgroundColor: color_theme.primaryBgColor,
    color: color_theme.primaryFontColor,
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 63px)",
      minHeight: 500,
      maxHeight: 1300,
    },
  }));

const ReactHome = () => {
  
    return (
      <>
        <ProductHeroLayoutRoot>
          <Grid
            container
            spacing={1}
            paddingTop={"35px"}
            justifyContent="center"
            alignItems="center"
            sx={{ height: "30vh" }}
          >
            <Grid xs={12} textAlign={"center"}>
              <Box sx={{ height: "35%" }}></Box>
            </Grid>
            <Grid xs={10} sm={10} md={11} lg={11} xl={11} textAlign={"center"}>
              <Typography variant="h2" component="h1" gutterBottom>
                DISCOVER VOLUNTEER OPPORTUNITIES
              </Typography>
            </Grid>
            <Grid xs={10} sm={6} md={5} lg={4} xl={4} textAlign={"center"}>
              <TextField
                variant="outlined"
                placeholder="Enter keywords..."
                color="primary"
                margin="dense"
                fullWidth={true}
                sx={{ backgroundColor: "#fff", input: { color: "black" } }}
              />
            </Grid>
            <Grid
              xs={10}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent="center"
            >
              <TextField
                variant="outlined"
                placeholder="Enter location..."
                color="primary"
                margin="dense"
                fullWidth={true}
                sx={{ backgroundColor: "#fff", input: { color: "black" } }}
              />
            </Grid>
            <Grid
              xs={10}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              textAlign={"center"}
              alignItems={"center"}
              sx={{ paddingTop: "3px" }}
            >
              <Button
                variant="contained"
                color="primary"
                id="inPerson"
                fullWidth={true}
                sx={{ height: "55%" }}
              >
                <SearchIcon />
              </Button>
            </Grid>
  
            <Grid
              xs={11}
              textAlign={"center"}
              alignItems={"center"}
              sx={{ paddingTop: "3px" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                }
                label="In Person"
                sx={{ fontSize: "24px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
                }
                label="Remote"
                sx={{ fontSize: "24px" }}
              />
            </Grid>
            <Grid xs={12} textAlign={"center"}>
              <Box sx={{ height: "35%" }}></Box>
            </Grid>
            
            
          </Grid>
        </ProductHeroLayoutRoot>
      </>
    );
  };

function Filler() {return (<Grid item xs={0} sm={0} md={1.5} lg={1.5} xl={1.5}></Grid>);}

function People () {
    return(
        <ThemeProvider theme={MaterialTheme}>
            <Box sx={{ height: "30px " }}></Box>
            <Typography variant="h5" gutterBottom sx={{textAlign: "center"}}>
              We are committed to optimizing the discovery of volunteer experiences. Together we can have impact, gain, skills, build community, and find joy.
            </Typography>
            <Seperator primary={false}/>
            <Section
            title="Meet Our Board Of Directors"
            children={[]}
            cols={6}
            primary={false}
            separator={false}
            />
            <Grid container spacing={10} justifyContent="center" alignItems="center" sx={{}}>
              {boardMembers}
            </Grid>
            <Section
            title="Summer 2023 Interns"
            children={[]}
            cols={6}
            primary={false}
            separator={false}
            />
            <Grid container spacing={5} justifyContent="center" alignItems="center" sx={{marginBottom: "5%"}}>
              {volunteers}
            </Grid>
        </ThemeProvider>
    );
}

export default People; 


