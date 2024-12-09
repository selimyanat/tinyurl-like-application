"use client";

import { useURLShortener } from "../hooks/use-url-shortener";
import React from "react";
import {
    Alert,
    CircularProgress,
    TextField,
    Fade,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
    StyledContainer,
    Title,
    ShortenButton,
    CopyButton,
} from "./URLShortenerStyles";

export const URLShortener: React.FC = () => {
    const { longUrl, setLongUrl, shortUrl, loading, error, shorten, mode, reset } =
        useURLShortener();

    return (
        <StyledContainer maxWidth="sm">
            <Title variant="h4">TinyURL like application</Title>
            <Grid container spacing={3}>
                {/* Long URL Input */}
                {(mode === "initial" || mode === "shortened") && (
                    <Grid item xs={12}>
                        <Fade in={true}>
                            <TextField
                                label="Enter your long URL"
                                fullWidth
                                value={longUrl}
                                onChange={(e) => setLongUrl(e.target.value)}
                                variant="outlined"
                            />
                        </Fade>
                    </Grid>
                )}

                {/* Shortened URL Display */}
                {mode === "shortened" && (
                    <Grid item xs={12}>
                        <Fade in={true}>
                            <TextField
                                label="Shortened URL"
                                fullWidth
                                value={shortUrl}
                                InputProps={{ readOnly: true }}
                                variant="outlined"
                            />
                        </Fade>
                    </Grid>
                )}

                {/* Error Message */}
                {error && (
                    <Grid item xs={12}>
                        <Fade in={true}>
                            <Alert severity="error">{error}</Alert>
                        </Fade>
                    </Grid>
                )}

                {/* Buttons Row */}
                <Grid item xs={12} container justifyContent="center" spacing={2}>
                    <Grid item>
                        {mode === "initial" ? (
                            <ShortenButton
                                onClick={shorten}
                                variant="contained"
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : "Shorten"}
                            </ShortenButton>
                        ) : (
                            <ShortenButton onClick={reset} variant="contained">
                                Shorten Another
                            </ShortenButton>
                        )}
                    </Grid>
                    {mode === "shortened" && shortUrl && (
                        <Grid item>
                            <CopyButton
                                onClick={() => navigator.clipboard.writeText(shortUrl)}
                                variant="contained"
                            >
                                Copy
                            </CopyButton>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </StyledContainer>
    );
};