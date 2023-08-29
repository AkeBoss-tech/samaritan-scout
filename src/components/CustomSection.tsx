import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import MaterialTheme from "./MaterialTheme";
import margins from "./ThemeMargins";
import { Box } from "@mui/material";
import color_theme from "./Theme";

interface StyledContainerProps {
  bgStyle: "white" | "paper" | "accent" | "dark" | "primary";
  padding?: "small" | "medium" | "none" | "large";
  maxWidth: boolean,
}

interface ContainerProps {
  bgStyle: "white" | "paper" | "accent" | "dark" | "primary";
  padding?: "small" | "large" | "none" | "medium";
  marginStyle?: "narrow" | "wide" | "normal";
  children?: React.ReactNode;
}

const theme = MaterialTheme;

const StyledContainer = styled(Container)<StyledContainerProps>(
  ({ bgStyle, padding, maxWidth }) => ({
    backgroundColor:
      bgStyle === "white"
        ? theme.palette.background.paper
        : bgStyle === "paper"
        ? color_theme.paperBgColor
        : bgStyle === "accent"
        ? color_theme.accentBgColor
        : bgStyle === "primary"
        ? color_theme.primaryBgColor
        : bgStyle === "dark"
        ? color_theme.coverBg
        : theme.palette.background.default,
    color:
      bgStyle === "dark"
        ? theme.palette.common.white
        : theme.palette.primary.main,
    paddingTop:
      padding === "small"
        ? "25px"
        : padding === "medium"
        ? "50px"
        : padding === "none"
        ? "0px"
        : "75px",
    paddingBottom:
      padding === "small"
        ? "25px"
        : padding === "medium"
        ? "50px"
        : padding === "none"
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
  padding,
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
      bgStyle={bgStyle}
      padding={padding}
        maxWidth={false}
    >
      <Box mr={margin} ml={margin}>
        {children}
      </Box>
    </StyledContainer>
  );
};

export default CustomContainer;
