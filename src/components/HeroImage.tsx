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
  backgroundColor?: string;
  fullScreen?: boolean;
  children?: ReactNode;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageSrc,
  adjustBackground,
  backgroundColor,
  fullScreen,
  children,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.5)",
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: backgroundColor // "rgba(0,0,0,0.5)"
        }}
      >
        {children}
      </div>
      
    </Box>
  );
};

export default HeroImage;
