import React from "react";
import ReactDOM from "react-dom/client";

//File
import App from "./App.jsx";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Creating custom theme
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
          borderLeft: "5px solid #c5c5c5",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
