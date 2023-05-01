import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

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
  Typography,
} from "@mui/material";

const drawerWidth = "auto";

const DocsLayout = ({ children }) => {
  const history = useRouter();
  const { path } = history.query;

  const [items, setItems] = useState([]);
  const space = 0.5;

  const where = `/docs/${path.join("/")}`;

  const rec = (dir, pad) => {
    return dir.map((item, index) => {
      const path = item.path.replace("/var/www", "");

      if (item.hasOwnProperty("children")) {
        return (
          <List
            key={`${item.name}-${index}`}
            sx={{ px: pad + space }}
            subheader={
              <ListSubheader
                onClick={() => history.push(`${path}/index.md`)}
                sx={{ cursor: "pointer" }}
                color="primary"
              >
                {item.name}
              </ListSubheader>
            }
            disablePadding
            dense
          >
            {rec(item.children, pad + space)}
          </List>
        );
      } else {
        return (
          <List
            key={`${item.name}-${index}`}
            sx={{ px: pad + space }}
            disablePadding
            dense
          >
            <ListItemButton
              selected={(where === path) | (where === `${path}/`)}
              onClick={() => history.push(path)}
              sx={{
                borderRadius: 2,
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </List>
        );
      }
    });
  };

  const doing = async () => {
    try {
      const { data } = await axios.get("https://api.tfasoft.com/api/docs/tree");

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    doing();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: "1rem",
        mb: "1rem",
      }}
    >
      <Box>
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
          open={true}
        >
          <Toolbar />
          <Divider />
          <Toolbar>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography color="primary" variant="h5" fontWeight="bold">
                TFASoft Docs
              </Typography>
            </Box>
          </Toolbar>
          <Divider />
          {rec(items, 1)}
        </Drawer>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Card variant="outlined">
            <CardContent>{children}</CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default DocsLayout;
