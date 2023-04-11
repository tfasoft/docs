import styles from "@/styles/globals.module.sass";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#f1f1f1",
    },
    primary: {
      main: styles.primaryColor,
    },
  },
});

export default theme;
