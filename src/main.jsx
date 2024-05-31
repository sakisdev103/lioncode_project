import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      default: "#f9f9f9",
      paper: "#838992",
    },
    primary: { main: "#e0e1e4" },
    secondary: { main: "#707070" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderLeft: "5px solid #687487",
        },
      },
    },

    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#707070",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>
);
