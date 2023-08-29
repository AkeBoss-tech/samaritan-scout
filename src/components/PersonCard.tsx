import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface PersonCardProps {
  type: string;
  job?: string;
  name?: string;
  description?: string;
  image?: string;
  link?: string;
}

export default function PersonCard({
  type,
  job = "",
  name = "",
  description = "",
  image = "",
  link,
}: PersonCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (type === "boardMember") {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={3}
        xl={3}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <a href={"https://www." + link}>
          <Card sx={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
              }}
            >
              <img
                src={"/images/" + image}
                alt="Avatar"
                style={{ maxHeight: "80%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                textDecoration: "none !important",
              }}
              style={{}}
            >
              <Typography variant="h5" component="div">
                {name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "25px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {job}
              </Typography>
            </Box>
          </Card>
        </a>
      </Grid>
    );
  } else if (type === "volunteer") {
    return (
      <Grid
        item
        xs={6}
        sm={4}
        md={4}
        lg={2}
        xl={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <a href={"https://www." + link}>
          <Card
            sx={{
              height: {
                xs: "55vh",
                sm: "50vh",
                md: "50vh",
                lg: "50vh",
                xl: "45vh",
              },
              maxWidth: "100%",
              transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover effect
              "&:hover": {
                backgroundColor: "#B2BEB5",
                color: "black",
              },
            }}
            className={`card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <CardContent>
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            ) : (
              <>
                <CardMedia
                  component="img"
                  height="200vh"
                  image={"/images/" + image}
                  alt="Peron"
                  sx={{}}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2">{job}</Typography>
                </CardContent>
              </>
            )}
          </Card>
        </a>
      </Grid>
    );
  } else {
    return <div>Error no type</div>;
  }
}
