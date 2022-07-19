import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material";

import Navbar from "./components/navbar";

import HomePage from "./pages/home";
import DocsLayout from "./pages/docslayout";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#2e7c32"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact><HomePage /></Route>
                        <Route path="/docs" exact><DocsLayout /></Route>
                    </Switch>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
