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
} from "@mui/material";

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

const DocsPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
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
                            key={item}
                            onClick={() => console.log(item.href)}
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
                <Divider />
            </Drawer>
            <Box
                sx={{
                    width: `calc(100% - ${drawerWidth})`
                }}
            >
                Docs are here
            </Box>
        </Box>
    );
}

export default DocsPage;