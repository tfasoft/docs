import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
    Box,
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
    Button,
} from "@mui/material";

import {
    Menu
} from "@mui/icons-material"

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

    const [drawerOpen, setDrawerOpen] = useState(true);

    const children = props.children;

    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: "1rem",
                mb: "1rem",
            }}
            
        >
            <Box
                sx={
                    drawerOpen
                    ?
                    {
                        display: "flex",
                        // width: `calc(100% - ${drawerWidth}px)`,
                    }
                    :
                    {
                        // display: "flex",
                        // width: `calc(100% + ${drawerWidth}px)`,
                    }
                }
            >
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                          width: drawerWidth,
                          boxSizing: 'border-box',
                        },
                      }}
                    variant="persistent"
                    anchor="left"
                    open={drawerOpen}
                >
                    <Toolbar />
                    <Divider />
                    <Toolbar>
                        <Button
                            variant="outlined"
                            startIcon={<Menu />}
                            onClick={() => setDrawerOpen(false)}
                            fullWidth
                        >
                            Collapse menu
                        </Button>
                    </Toolbar>
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
                                selected={location.pathname === item.href | location.pathname === `${item.href}/`}
                                key={item}
                                onClick={() => history.push(item.href)}
                            >
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
                <Box
                    sx={{
                        width: "100%"
                    }}
                >
                    <Card
                        variant="outlined"
                    >
                        <CardContent>
                            {
                                !drawerOpen
                                &&
                                <Box>
                                    <Button
                                        variant="outlined"
                                        startIcon={<Menu />}
                                        onClick={() => setDrawerOpen(true)}
                                    >
                                        Open menu
                                    </Button>
                                    <br /><br />
                                </Box>
                            }
                            {children}
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}

export default DocsLayout;