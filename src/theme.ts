import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
      "100": "#FF0000",
    },
    // secondary: {
    //   light: "#ff7961",
    //   main: "#f44336",
    //   dark: "#ba000d",
    //   contrastText: "#000",
    // },
  },
});
