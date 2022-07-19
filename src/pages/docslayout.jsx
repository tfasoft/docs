import { useHistory, useLocation } from "react-router-dom";

import {
    Box,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Toolbar,
    Divider,
    Card,
    CardContent,
    Container,
} from "@mui/material";
import DocsTitle from "../components/text/docstitle";
import DocsSubTitle from "../components/text/docssubtitle";
import DocsParagraph from "../components/text/docsparagraph";

const drawerWidth = 260;

const docsItem = [
    {
        title: "Docs Introduction",
        href: "/docs",
    },
    {
        title: "API",
        href: "/docs/api",
    },
    {
        title: "Status codes",
        href: "/docs/codes",
    }
];

const sdkItems = [
    {
        title: "SDKs Introduction",
        href: "/sdks",
    },
    {
        title: "NodeJs",
        href: "/sdks/nodejs",
    },
    {
        title: "Python",
        href: "/sdks/python",
    },
    {
        title: "Laravel",
        href: "/sdks/laravel",
    },
    {
        title: ".Net",
        href: "/sdks/.net",
    }
];

const DocsLayout = (props) => {
    const history = useHistory();
    const location = useLocation();

    const children = props.children;

    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: "1rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%"
                }}
            >
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider />
                    <List
                        subheader={<ListSubheader>Docs</ListSubheader>}
                    >
                        {docsItem.map((item, index) => (
                            <ListItemButton
                                selected={location.pathname === item.href | location.pathname === `${item.href}/`}
                                key={item}
                                onClick={() => history.push(item.href)}
                            >
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        ))}
                    </List>
                    <Divider />
                    <List
                        subheader={<ListSubheader>SDks</ListSubheader>}
                    >
                        {sdkItems.map((item, index) => (
                            <ListItemButton
                                key={item}
                                onClick={() => console.log(item.href)}
                            >
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
                <Box
                    sx={{
                        width: '100%'
                    }}
                >
                    <Card
                        variant="outlined"
                    >
                        <CardContent>
                            {children}
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}

export default DocsLayout;