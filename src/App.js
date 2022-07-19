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
import DocsPage from "./pages/docs";
import SDKsPage from "./pages/sdks";

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
                    <Container
                        sx={{
                            mt: '1rem',
                        }}
                    >
                        <Switch>
                            <Route path="/" exact><HomePage/></Route>
                            <Route path="/docs" exact><DocsPage /></Route>
                            <Route path="/sdks" exact><SDKsPage /></Route>
                        </Switch>
                    </Container>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
