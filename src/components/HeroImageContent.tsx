

import React, { ReactNode } from "react";
import { Stack, useMediaQuery } from "@mui/material";
import MaterialTheme from "./MaterialTheme";

interface HeroImageContentProps {
    color: string;
  xPosition: 'left' | 'center' | 'right' | "extra-left" | "extra-right";
  yPosition: 'center' | 'bottom' | 'top';
  width?: 'wide' | 'narrow' | 'full' | 'half';
  textColor?: string;
  children?: ReactNode;
}

const HeroImageContent: React.FC<HeroImageContentProps> = ({ color, xPosition, yPosition, width, textColor, children }) => {
    let xPositionValue: { xs: string; sm?: string; md: string; lg?: string; xl?: string; };
    let yPositionValue: { xs: string; sm?: string; md: string; lg?: string; xl?: string; };
    switch (xPosition) {
        case 'left':
            xPositionValue = { xs: "-50%", sm: "-110%", md: "-110%", lg: "-110%", xl: "-110%" };
            break;
        case 'extra-left':
            xPositionValue  = { xs: "-50%", sm: "-90%", md: "-90%", lg: "-100%", xl: "-100%" };
            break;
        case 'center':
            xPositionValue = { xs: "-50%", sm: "-50%", md: "-50%", lg: "-50%", xl: "-50%" };
            break;
        case 'right':
            xPositionValue = { xs: "-50%", sm: "10%", md: "10%", lg: "10%" };
            break;
        case 'extra-right':
            xPositionValue  = { xs: "-50%", sm: "-50%", md: "20%", lg: "20%", xl: "20%" };
            break;
        default:
            xPositionValue = { xs: "-50%", sm: "-50%", md: "50%", lg: "50%", xl: "50%" };
            break;
    }
    switch (yPosition) {
        case 'center':
            yPositionValue = { xs: "-10vh", sm: "-50%", md: "-50%", lg: "-50%", xl: "-50%" };
            break;
        case 'bottom':
            yPositionValue = { xs: "75%", sm: "50%", md: "50%", lg: "50%", xl: "50%" };
            break;
        case 'top':
            yPositionValue = { xs: "-75%", sm: "-100%", md: "-25vh", lg: "-25vh", xl: "-25vh" };
            break;
        default:
            yPositionValue = { xs: "50%", sm: "50%", md: "50%", lg: "50%", xl: "50%" };
            break;
    }

    let widthVal: { xs: string; sm: string; md: string; lg: string; xl: string; };
    switch (width) {
        case 'wide':
            widthVal = { xs: "90%", sm: "80%", md: "60%", lg: "70%", xl: "55%" };
            break;
        case 'narrow':
            widthVal = { xs: "90%", sm: "40%", md: "40%", lg: "30%", xl: "20%" };
            break;
        case 'full':
            widthVal = { xs: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" };
            break;
        case 'half':
            widthVal = { xs: "90%", sm: "50%", md: "50%", lg: "40%", xl: "40%" };
            break;
        default:
            widthVal = { xs: "90%", sm: "80%", md: "60%", lg: "70%", xl: "55%" };
            break;
    }

    let transformValue: string;
      // Use Material-UI's breakpoints to determine screen size
  const isXs = useMediaQuery(MaterialTheme.breakpoints.only('xs'));
  const isSm = useMediaQuery(MaterialTheme.breakpoints.only('sm'));
  const isMd = useMediaQuery(MaterialTheme.breakpoints.only('md'));
  const isLg = useMediaQuery(MaterialTheme.breakpoints.only('lg'));
  const isXl = useMediaQuery(MaterialTheme.breakpoints.only('xl'));

    if (isXs) {
        transformValue = "translate(" + xPositionValue.xs + ", " + yPositionValue.xs + ")";
    } else if (isSm) {
        transformValue = "translate(" + xPositionValue.sm + ", " + yPositionValue.sm + ")";
    } else if (isMd) {
        transformValue = "translate(" + xPositionValue.md + ", " + yPositionValue.md + ")";
    } else if (isLg) {
        transformValue = "translate(" + xPositionValue.lg + ", " + yPositionValue.lg + ")";
    } else if (isXl) {
        transformValue = "translate(" + xPositionValue.xl + ", " + yPositionValue.xl + ")";
    } else {
        transformValue = "translate(" + xPositionValue.xs + ", " + yPositionValue.xs + ")";
    }


  return (
      <Stack
        position={"absolute"}
        left={{ xs: "50%", sm: "50%" }}
        width={widthVal}
        bottom={0}
        bgcolor={color}
        sx={{ transform: transformValue }}
        borderRadius={1}
        padding={{ xs: 3, sm: 3, md: 5, lg: 5, xl: 5 }}
        color={
            textColor ? textColor : "common.black"
        }
      >
        {children}
      </Stack>
    
  );
};

export default HeroImageContent;
