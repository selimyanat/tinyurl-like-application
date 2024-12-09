import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";

// Styled Container for the layout
export const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}));

// Styled Title for the header
export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    textAlign: "center",
}));

// Styled Shorten Button
export const ShortenButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "12px 24px",
    borderRadius: "25px",
    fontWeight: "600",
    "&:hover": {
        backgroundColor: "#E5BE00",
    },
}));

// Styled Copy Button
export const CopyButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#6A0DAD",
    color: "#FFF",
    padding: "12px 24px",
    borderRadius: "25px",
    fontWeight: "600",
    "&:hover": {
        backgroundColor: "#5B0B9A",
    },
}));
