import { useRouter } from "next/router";

import { SDK, Markdown } from "@/components";

import { Box, Typography, Grid, Button, Container } from "@mui/material";

import { Masonry } from "@mui/lab";

import PythonIcon from "@/assets/svg/python.svg";
import NodeJsIcon from "@/assets/svg/nodejs.svg";
import PhpIcon from "@/assets/svg/laravel.svg";
import MicrosoftIcon from "@/assets/svg/microsoft.svg";

const sdks = [
  {
    title: "Python",
    details: "Python SDK for your Django or Flask applications.",
    href: "/docs/sdks/python/README.md",
    logo: PythonIcon,
  },
  {
    title: "NodeJs",
    details:
      "You can use NodeJs SDK in your React, Express or even your telegram bots!",
    href: "/docs/sdks/node/README.md",
    logo: NodeJsIcon,
  },
  {
    title: ".Net",
    details:
      "If you are a .Net developer, you can now use .Net SDK in your web, desktop or mobile applications.",
    href: "/docs/sdks/net/README.md",
    logo: MicrosoftIcon,
  },
  {
    title: "Php",
    details:
      "You are a Php/Laravel developer and need to use TFA, do your job with Php SDK!",
    href: "/docs/sdks/php/README.md",
    logo: PhpIcon,
  },
];

const HomePage = () => {
  const history = useRouter();

  return (
    <Container
      sx={{
        mt: "1rem",
      }}
    >
      <Grid columns={{ md: 12, xs: 6 }} spacing={2} container>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          item
        >
          <Box>
            <Typography color="primary" variant="h3" gutterBottom>
              TFA Docs
            </Typography>
            <Typography variant="h5" gutterButton>
              Help for wherever you are on your TFA journey.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box className="markdown">
            <Markdown path="https://raw.githubusercontent.com/tfasoft/docs/main/src/md/sdks/intro.md" />
          </Box>
        </Grid>
      </Grid>
      <br />
      <Grid columns={{ md: 12, xs: 6 }} spacing={2} container>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          item
        >
          <Box>
            <Typography color="primary" variant="h4" gutterBottom>
              SDKs
            </Typography>
            <Typography color="text.primary" paragraph gutterButton>
              We developed some SKDs for developers to use our APIs easily ❤️
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => history.push("/docs/sdks/README.md")}
              disableElevation
            >
              Get started with SDKs
            </Button>
            <Box
              sx={{
                mt: 10,
                bgcolor: "primary",
                border: "solid 0.5px",
                borderLeft: "solid 5px",
                borderColor: "primary.main",
                p: "1rem",
              }}
            >
              <Typography>
                You can go to any SDK you want with clicking on them.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Masonry columns={{ md: 2, sm: 2, xs: 1 }} spacing={2}>
            {sdks.map((sdk) => {
              return <SDK sdk={sdk} />;
            })}
          </Masonry>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
