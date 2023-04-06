import { useRouter } from "next/router";
import { useState } from "react";

import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";

import { Menu, MenuBook, Home } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
  {
    name: "TFASoft",
    href: "https://tfasoft.com",
    icon: <Home />,
    inside: false,
  },
  {
    name: "Documentations",
    href: "/docs/README.md",
    icon: <MenuBook />,
    inside: true,
  },
];

const Navbar = () => {
  const history = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Toolbar />
      <Typography variant="h6" sx={{ my: 2 }}>
        TFASoft services
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              href={!item.inside && item.href}
              onClick={() => item.inside && history.push(item.href)}
            >
              <ListItemIcon sx={{ color: "primary.main" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = undefined;

  return (
    <Box>
      <AppBar
        color="primary"
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", sm: "block", md: "none" } }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              onClick={() => history.push("/")}
              sx={{
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              TFASoft Docs
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => history.push(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </Box>
  );
};

export default Navbar;
