'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add any metadata or links here if needed */}
        <title>URL Shortener</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children} {/* Render the content of the page */}
        </ThemeProvider>
      </body>
    </html>
  );
}
