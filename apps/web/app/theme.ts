// src/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

const theme: ThemeOptions = {
    palette: {
        primary: {
            main: "#6A0DAD", // Purple
        },
        secondary: {
            main: "#FFD700", // Gold
        },
        background: {
            default: "#f9f9f9",
            paper: "#ffffff",
        },
        text: {
            primary: "#333",
            secondary: "#666",
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        h4: {
            fontWeight: "bold",
            fontSize: "2rem",
        },
        button: {
            textTransform: "none", // Disable uppercase transformation
            fontWeight: "bold",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "25px", // Rounded corners for all buttons
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
                },
            },
        },
    },
};

export default createTheme(theme);
