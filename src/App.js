import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Dashboard } from './dashboard/Dashboard'

const theme = createMuiTheme({
  palette: {
    background: {
      background2: '#f0f0f0'
    }
  }
});

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}
