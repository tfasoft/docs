import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
    Box,
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material";

import Navbar from "./components/navbar";

import HomePage from "./pages/home";
import DocsLayout from "./pages/docslayout";

// Import SDK Pages
import SDKsPage from "./pages/docs/sdks/sdks";
import NetSDK from "./pages/docs/sdks/netsdk";
import PhpSDK from "./pages/docs/sdks/phpsdk";
import PythonSDK from "./pages/docs/sdks/pythonsdk";
import NodeJsSDK from "./pages/docs/sdks/nodejssdk";

// Import Docs Pages
import Docs from "./pages/docs/docs/docs";
import DocsAPI from "./pages/docs/docs/api";
import DocsCodes from "./pages/docs/docs/codes";


const routes = [
    {
        route: '/docs',
        component: <Docs />
    },
    {
        route: '/docs/api',
        component: <DocsAPI />
    },
    {
        route: '/docs/codes',
        component: <DocsCodes />
    },
    {
        route: '/sdks',
        component: <SDKsPage />
    },
    {
        route: '/sdks/nodejs',
        component: <NodeJsSDK />
    },
    {
        route: '/sdks/python',
        component: <PythonSDK />
    },
    {
        route: '/sdks/php',
        component: <PhpSDK />
    },
    {
        route: '/sdks/.net',
        component: <NetSDK />
    },
];

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
                        {
                            routes.map((route) => {
                                return (
                                    <Route path={route.route} exact>
                                        <DocsLayout>
                                            {route.component}
                                        </DocsLayout>
                                    </Route>
                                );
                            })
                        }
                    </Switch>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
