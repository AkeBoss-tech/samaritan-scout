import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import MaterialTheme from "./MaterialTheme";
import margins from "./ThemeMargins";
import { Box } from "@mui/material";
import color_theme from "./Theme";

interface StyledContainerProps {
  bgstyle: "white" | "paper" | "accent" | "dark" | "transparent" | "gray" | "primary";
  paddingy?: "small" | "medium" | "none" | "large";
  maxWidth: boolean,
}

interface ContainerProps {
  bgStyle: "white" | "paper" | "accent" | "dark" | "transparent" | "gray" | "primary";
  paddingY?: "small" | "large" | "none" | "medium";
  marginStyle?: "narrow" | "wide" | "normal";
  children?: React.ReactNode;
}

const theme = MaterialTheme;

const StyledContainer = styled(Container)<StyledContainerProps>(
  ({ bgstyle, paddingy, maxWidth }) => ({
    backgroundColor:
      bgstyle === "white"
        ? theme.palette.background.paper
        : bgstyle === "paper"
        ? color_theme.paperBgColor
        : bgstyle === "transparent"
        ? "transparent"
        : bgstyle === "gray"
        ? color_theme.grayBgColor
        : bgstyle === "accent"
        ? color_theme.accentBgColor
        : bgstyle === "primary"
        ? color_theme.primaryBgColor
        : bgstyle === "dark"
        ? color_theme.coverBg
        : theme.palette.background.default,
    color:
      bgstyle === "dark"
        ? theme.palette.common.white
        : theme.palette.primary.main,
    paddingTop:
      paddingy === "small"
        ? "25px"
        : paddingy === "medium"
        ? "50px"
        : paddingy === "none"
        ? "0px"
        : "75px",
    paddingBottom:
      paddingy === "small"
        ? "25px"
        : paddingy === "medium"
        ? "50px"
        : paddingy === "none"
        ? "0px"
        : "75px",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: maxWidth ? "100%" : "none",
  })
);

const CustomContainer: React.FC<ContainerProps> = ({
  bgStyle,
  paddingY,
  children,
    marginStyle,
  ...otherProps
}) => {

    const margin = 
    marginStyle === "normal" 
    ? margins
    : marginStyle === "wide" 
    ? {
        xs: "2rem",
        sm: "4rem",
        md: "15rem",
    }
    : {
        xs: "0",
        sm: "1rem",
        md: "5rem",
    }; // narrow

  return (
    <StyledContainer
      {...otherProps}
      bgstyle={bgStyle}
      paddingy={paddingY}
        maxWidth={false}
    >
      <Box mr={margin} ml={margin}>
        {children}
      </Box>
    </StyledContainer>
  );
};

export default CustomContainer;
