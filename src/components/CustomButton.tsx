import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import MaterialTheme from './MaterialTheme';

type StyledButtonProps = {
  bgstyle: 'primary' | 'secondary' | 'tertiary';
  hoverstyle: 'dark' | 'light';
  size: 'small' | 'medium' | 'large';
};

type ButtonProps = {
  size: 'small' | 'medium' | 'large';
  bgStyle: 'primary' | 'secondary' | 'tertiary';
  hoverStyle: 'dark' | 'light';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
};

const theme = MaterialTheme;

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ size, bgstyle, hoverstyle }) => ({
    width: 'fit-content',
    boxShadow: theme.shadows[4],
    border: `solid 1px ${
      bgstyle === 'primary'
        ? theme.palette.primary.light
        : bgstyle === 'secondary'
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    }`,
    backgroundColor:
      bgstyle === 'primary'
        ? theme.palette.primary.light
        : bgstyle === 'secondary'
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    color:
      bgstyle === 'secondary'
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
        hoverstyle === 'dark' ? theme.palette.primary.main : '#fff',
      color: hoverstyle === 'dark' ? '#fff' : theme.palette.primary.main,
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
  onClick,
  ...otherProps
}) => {
  return (
    <StyledButton
      {...otherProps}
      size={size}
      bgstyle={bgStyle}
      hoverstyle={hoverStyle}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
