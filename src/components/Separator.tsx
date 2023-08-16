import { Box, Container, Divider, Grid } from "@mui/material";
import color_theme from "./Theme";

function Separator({ primary }: { primary: boolean }) {
  const fontColor = primary
    ? color_theme.primaryFontColor
    : color_theme.fontColor;

  return (
    <Container
      style={{
        flex: 1,
        paddingBottom: "20px",
      }}
      maxWidth={false} // Set maxWidth to 'false' to fill the width of the screen
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={3} md={3} color={fontColor}>
          <Box
            sx={{ width: "100%" }}
            borderBottom={`5px solid ${fontColor}`}
          ></Box>
        </Grid>
        <Grid item xs={2} md={2} textAlign={"center"}>
          <img
            src={"/images/dog_silhouette.png"}
            alt="dog"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "7rem",
              transform: "scaleX(-1)",
            }}
          ></img>
        </Grid>
        <Grid item xs={3} md={3} color={fontColor}>
          <Box
            sx={{ width: "100%" }}
            borderBottom={`5px solid ${fontColor}`}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Separator;
