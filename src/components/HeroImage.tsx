import React, { ReactElement, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Stack } from "@mui/material";
import Chip from "@mui/material/Chip";

interface HeroImageProps {
  imageSrc: string;
  adjustBackground?: string;
  fullScreen?: boolean;
  children?: ReactNode;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageSrc,
  adjustBackground,
  fullScreen,
  children,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: adjustBackground ? adjustBackground : "25% 75%",
        objectFit: "cover",
        position: "relative",
      }}
      height={{
        xs: fullScreen ? "calc(90vh - 65px)" : "50vh",
        sm: fullScreen ? "calc(90vh - 65px)" : "55vh",
        md: fullScreen ? "calc(90vh - 65px)" : "60vh",
        lg: fullScreen ? "calc(90vh - 65px)" : "60vh",
        xl: fullScreen ? "calc(90vh - 65px)" : "70vh",
      }}
      alignContent={"center"}
    >
      {children}
    </Box>
  );
};

export default HeroImage;
