import "@/styles/globals.css";

import { Navbar } from "@/components";
import theme from "@/theme";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
