import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import MaterialTheme from './MaterialTheme';

interface StyledButtonProps {
  bgStyle: 'primary' | 'secondary' | 'tertiary';
  hoverStyle: 'dark' | 'light';
  size: 'small' | 'medium' | 'large';
}

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  bgStyle: 'primary' | 'secondary' | 'tertiary';
  hoverStyle: 'dark' | 'light';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const theme = MaterialTheme;

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ size, bgStyle, hoverStyle }) => ({
    width: 'fit-content',
    boxShadow: theme.shadows[4],
    border: `solid 1px ${
      bgStyle === 'primary'
        ? theme.palette.primary.light
        : bgStyle === 'secondary'
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    }`,
    backgroundColor:
      bgStyle === 'primary'
        ? theme.palette.primary.light
        : bgStyle === 'secondary'
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    color:
      bgStyle === 'secondary'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    padding:
      size === 'small'
        ? '5px 10px'
        : size === 'medium'
        ? '10px 20px'
        : '15px 30px',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    '&:hover': {
      backgroundColor:
        hoverStyle === 'dark' ? theme.palette.primary.main : '#fff',
      color: hoverStyle === 'dark' ? '#fff' : theme.palette.primary.main,
      border: 'solid 1px gray',
    },
  })
);

const CustomButton: React.FC<ButtonProps> = ({
  size,
  bgStyle,
  hoverStyle,
  startIcon,
  endIcon,
  children,
  ...otherProps
}) => {
  return (
    <StyledButton
      {...otherProps}
      size={size}
      bgStyle={bgStyle}
      hoverStyle={hoverStyle}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
