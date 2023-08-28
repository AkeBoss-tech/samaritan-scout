import "../pages/styles.css";
import Section from "../components/Section";
import color_theme from "../components/Theme";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MaterialTheme from "../components/MaterialTheme";
import Seperator from "../components/Separator";
import PersonCard from "../components/PersonCard";
import peopleInfo from "../people.json";
import React from "react";
import { JSX } from "react/jsx-runtime";
import CustomContainer from "../components/CustomSection";

const boardMembers: any = [];
const volunteers: any = [];

interface BoardMember {
  linkedin: string;
  job: string;
  image: string;
}
const boardOfDirectors: Record<string, BoardMember> =
  peopleInfo["Meet Our Board Of Directors"];

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

const summerVolunteers: Record<string, BoardMember> =
  peopleInfo["Summer 2023 Interns"];

Object.keys(summerVolunteers).forEach((key) => {
  const value = summerVolunteers[key];
  volunteers.push(
    <React.Fragment key={key}>
      <PersonCard
        type={"volunteer"}
        job={value.job}
        name={key}
        image={value.image}
        link={value.linkedin}
      />
    </React.Fragment>
  );
});

function Filler() {
  return <Grid item xs={0} sm={0} md={1.5} lg={1.5} xl={1.5}></Grid>;
}

function People() {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <Box sx={{ height: "30px " }}></Box>
      <CustomContainer bgStyle="white" padding="medium">
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Meet Our Team
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          We are committed to optimizing the discovery of volunteer experiences.
          Together we can have impact, gain, skills, build community, and find
          joy.
        </Typography>
      </CustomContainer>
      <Section
        title="Meet Our Board Of Directors"
        children={[]}
        cols={6}
        primary={false}
        separator={false}
      />

      <Grid
        container
        spacing={10}
        justifyContent="center"
        alignItems="center"
        sx={{}}
      >
        {boardMembers}
      </Grid>
      <CustomContainer bgStyle="white" padding="medium" marginStyle="narrow">
        <Typography
          variant="h3"
          align="center"
          sx={{ marginBottom: "3%", marginTop: "5%" }}
        >
          Meet Our Summer 2023 Interns
        </Typography>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: "5%" }}
        >
          {volunteers}
        </Grid>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default People;
