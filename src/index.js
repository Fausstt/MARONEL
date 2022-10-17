import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 981,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#781026",
    },
    secondary: {
      main: "#FFBFA0",
    },
    BasketButton: {
      main: "#00A046",
      contrastText: "#fff",
    },
    DopButton: {
      main: "#F5F5F5",
      contrastText: "#3E77AA",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
