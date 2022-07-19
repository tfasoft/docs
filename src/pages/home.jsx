import {
    colors as Colors,
    Box,
    Typography,
    Grid, Button,
} from "@mui/material";

import {
    Masonry,
} from "@mui/lab";

import HomeSDKsComponent from "../components/sdkhome";

import PythonIcon from '../assets/svg/python.svg';
import NodeJsIcon from '../assets/svg/nodejs.svg';
import LaravelIcon from '../assets/svg/laravel.svg';
import MicrosoftIcon from '../assets/svg/microsoft.svg';
import PythonExample from '../assets/svg/python-example.svg';

const sdks = [
    {
        title: "Python",
        details: "Python SDK for your Django or Flask applications.",
        href: "python",
        logo: PythonIcon,
    },
    {
        title: "NodeJs",
        details: "You can use NodeJs SDK in your React, Express or even your telegram bots!",
        href: "nodejs",
        logo: NodeJsIcon,
    },
    {
        title: ".Net",
        details: "If you are a .Net developer, you can now use .Net SDK in your web, desktop or mobile applications.",
        href: ".net",
        logo: MicrosoftIcon,
    },
    {
        title: "Laravel",
        details: "You are a Laravel developer and need to use TFA, do your job with Laravel SDK!",
        href: "laravel",
        logo: LaravelIcon,
    }
];

const HomePage = () => {
    return (
        <Box>
            <Grid
                columns={{ md: 12, xs: 6 }}
                spacing={2}
                container
            >
                <Grid
                    xs={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    item
                >
                    <Box>
                        <Typography
                            color="primary"
                            variant="h3"
                            gutterBottom
                        >
                            TFA Docs
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterButton
                        >
                            Help for wherever you are on your TFA journey.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    xs={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    item
                >
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                        }}
                        alt="Python example"
                        src={PythonExample}
                    />
                </Grid>
            </Grid>
            <br />
            <Grid
                columns={{ md: 12, xs: 6 }}
                spacing={2}
                container
            >
                <Grid
                    xs={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    item
                >
                    <Box>
                        <Typography
                            color="primary"
                            variant="h4"
                            gutterBottom
                        >
                            SDKs
                        </Typography>
                        <Typography
                            color="text.primary"
                            paragraph
                            gutterButton
                        >
                            We developed some SKDs for developers to use our APIs easily ❤️
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            disableElevation
                        >
                            Get started with SDKs
                        </Button>
                        <br />
                        <br />
                        <Box
                            sx={{
                                bgcolor: Colors.lightGreen[100],
                                borderLeft: "solid 3px",
                                borderLeftColor: "primary.main",
                                p: "1rem",
                            }}
                        >
                            <Typography>
                                You can go to any SDK you want with clicking on them.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    xs={6}
                    item
                >
                    <Masonry
                        spacing={2}
                        columns={2}
                    >
                        {
                            sdks.map((sdk) => {
                                return (
                                    <HomeSDKsComponent sdk={sdk} />
                                );
                            })
                        }
                    </Masonry>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage;