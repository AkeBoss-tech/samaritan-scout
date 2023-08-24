// Store all colors and typography settings here

import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

// follow this guide https://mui.com/material-ui/customization/default-theme/
// and the figma 
let MaterialTheme = createTheme({
    palette: {
        mode: 'light',
        common: {
            black: '#000', 
            white: '#fff', // cream
        },
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
        // change the following later
        /* warning: {
            // main: '#273225', // dark green
            // light: '#62B16E', // light green
            // dark: '#62B16E', // light green
            // contrastText: '#fff', // white
        },
        info: {
            // main: '#273225', // dark green
            // light: '#62B16E', // light green
            // dark: '#62B16E', // light green
            // contrastText: '#fff', // white
        },
        success: {
            // main: '#273225', // dark green
            // light: '#62B16E', // light green
            // dark: '#62B16E', // light green
            // contrastText: '#fff', // white
        }, */
        background: {
            paper: '#fff', // cream
            default: '#273225', // dark green
        },
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
        },
        h3: {
            fontSize: '24px',
            fontWeight: 700,
        },
        h4: {
            fontSize: '20px',
            fontWeight: 400,
        },
        h5: {
            fontSize: '20px',
            fontWeight: 700,
        },
        h6: {
            fontSize: '18px',
            fontWeight: 700,
        },
        htmlFontSize: 18,
        fontSize: 18,
        subtitle2: { // Display in the Figma file
            fontSize: '36px',
            fontWeight: 900,
        },
        body1: {
            fontSize: '18px',
            fontWeight: 400,
        },
    },
    breakpoints: {
        values: { // change these to decide how the page should look on different screen sizes
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1500,
        },
    },
});

// may or may not need this
MaterialTheme = responsiveFontSizes(MaterialTheme);

export default MaterialTheme;