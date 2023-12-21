import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Import Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/Router";
import { ThemeProvider } from "@emotion/react";
import AuthProvider from "./Components/Provider/AuthProvider";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
