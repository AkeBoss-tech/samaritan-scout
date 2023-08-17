// Store all colors and typography settings here

import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

// follow this guide https://mui.com/material-ui/customization/default-theme/
let MaterialTheme = createTheme({
    palette: {
        primary: {
            main: '#273225', // dark green
            light: '#62B16E', // light green
        },
        secondary: {
            main: '#fffdd0', // cream
            dark: '#A79360', // tan
        },
        error: {
            main: '#C20B0B', // red
        },
        text: {
            primary: '#62B16E', // black
            // TODO: Better change to default black and white color
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