import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#f1f1f1",
    },
    primary: {
      main: colors.blue[600],
    },
  },
});

export default theme;
