import { useState } from "react";
import { useRouter } from "next/router";

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

import { Menu } from "@mui/icons-material";

const drawerWidth = 260;

const items = [
  {
    id: 1,
    title: "Docs",
    items: [
      {
        title: "Docs Introduction",
        href: "/docs/README.md",
      },
    ],
  },
  {
    id: 2,
    title: "API Docs",
    items: [
      {
        title: "API",
        href: "/docs/api/README.md",
      },
      {
        title: "Status codes",
        href: "/docs/api/codes.md",
      },
    ],
  },
  {
    id: 3,
    title: "SDKs Docs",
    items: [
      {
        title: "SDKs Introduction",
        href: "/docs/sdks/README.md",
      },
      {
        title: "NodeJs",
        href: "/docs/sdks/node/README.md",
      },
      {
        title: "Python",
        href: "/docs/sdks/python/README.md",
      },
      {
        title: "Php",
        href: "/docs/sdks/php/README.md",
      },
      {
        title: ".Net",
        href: "/docs/sdks/net/README.md",
      },
    ],
  },
];

const DocsLayout = ({ children }) => {
  const history = useRouter();
  const { path } = history.query;

  const where = `/docs/${path.join("/")}`;

  const [drawerOpen, setDrawerOpen] = useState(true);

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
            ? {
                display: "flex",
              }
            : {}
        }
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
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
          {items.map((item) => (
            <Box key={item.id}>
              <List subheader={<ListSubheader>{item.title}</ListSubheader>}>
                {item.items.map((it) => (
                  <ListItemButton
                    selected={(where === it.href) | (where === `${it.href}/`)}
                    key={it.id}
                    onClick={() => history.push(it.href)}
                  >
                    <ListItemText primary={it.title} />
                  </ListItemButton>
                ))}
              </List>
              <Divider />
            </Box>
          ))}
        </Drawer>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Card variant="outlined">
            <CardContent>
              {!drawerOpen && (
                <Box>
                  <Button
                    variant="outlined"
                    startIcon={<Menu />}
                    onClick={() => setDrawerOpen(true)}
                  >
                    Open menu
                  </Button>
                  <br />
                  <br />
                </Box>
              )}
              {children}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default DocsLayout;
