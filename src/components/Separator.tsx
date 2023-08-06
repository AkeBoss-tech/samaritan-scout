import { Container, Divider, Grid } from "@mui/material";
import theme from "./Theme";

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

export default Separator;