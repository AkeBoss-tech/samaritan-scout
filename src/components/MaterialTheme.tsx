// Store all colors and typography settings here

import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

// follow this guide https://mui.com/material-ui/customization/default-theme/
let MaterialTheme = createTheme({
    palette: {
        primary: {
            main: '#273225', // light green
            contrastText: '#fffdd0', // dark brown
        },
        secondary: {
            main: '#fffdd0', // light brown
        },
        error: {
            main: '#f44336', // red
        },
        text: {
            primary: '#fffdd0', // black
            secondary: '#273225', // white
        }
    },
    typography: {
        fontFamily: [
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '36px',
            fontWeight: 700,
        },
        h2: {
            fontSize: '32px',
            fontWeight: 700,
        }
    },
});

MaterialTheme = responsiveFontSizes(MaterialTheme);

export default MaterialTheme;