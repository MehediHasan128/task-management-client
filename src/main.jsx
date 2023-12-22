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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
      </DndProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
