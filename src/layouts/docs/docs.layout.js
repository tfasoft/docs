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
import { Loader } from "@/components";

const drawerWidth = 240;

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
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography color="primary" variant="h5" fontWeight="bold">
            TFASoft Docs
          </Typography>
        </Toolbar>
        <Divider />
        {items.length !== 0 ? rec(items, 1) : <Loader />}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Card variant="outlined">
          <CardContent>{children}</CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DocsLayout;
