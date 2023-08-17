import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";
import {
  Box,
  Grid, Typography
} from "@mui/material";


import theme from "./Theme";
import Separator from "./Separator";
import {
  ThemeProvider
} from "@mui/material/styles";
import MaterialTheme from "./MaterialTheme";


function Section({
  title,
  children,
  cols,
  primary,
  separator,
}: {
  title: string;
  children: Array<string>;
  cols: number;
  primary: boolean;
  separator: boolean;
}) {
  const bgColor = primary ? theme.primaryBgColor : theme.bgColor;
  const fontColor = primary ? theme.primaryFontColor : theme.fontColor;

  return (
    <ThemeProvider theme={MaterialTheme}>
      <Container
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          flex: 1,
          color: fontColor,
          backgroundColor: bgColor,
        }}
        maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
      >
        <Typography
          variant="h1"
          noWrap
          color={primary ? theme.primaryFontColor : theme.fontColor}
          align="center"
        >
          {title}
        </Typography>

        {separator ? <Separator primary={primary} /> : <Box sx={{ height: '10px' }} />}

        <Grid container spacing={2}>
          {children.map((child) => (
            <Grid item xs={12} md={cols}>
              <Typography
                variant="body1"
                align="left"
                color={fontColor}
                textAlign={"center"}
              >
                {child}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Section;
