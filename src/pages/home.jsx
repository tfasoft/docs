import { useHistory } from "react-router-dom";

import {
    colors as Colors,
    Box,
    Typography,
    Grid,
    Button,
    Container,
} from "@mui/material";

import {
    Masonry,
} from "@mui/lab";

import HomeSDKsComponent from "../components/sdkhome";

import PythonIcon from '../assets/svg/python.svg';
import NodeJsIcon from '../assets/svg/nodejs.svg';
import PhpIcon from '../assets/svg/php.svg';
import MicrosoftIcon from '../assets/svg/microsoft.svg';

import CodeBlock from "../components/codeblock";

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
        title: "Php",
        details: "You are a Php/Laravel developer and need to use TFA, do your job with Php SDK!",
        href: "php",
        logo: PhpIcon,
    }
];

const HomePage = () => {
    const history = useHistory();

    return (
        <Container
            sx={{
                mt: "1rem",
            }}
        >
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
                        justifyContent: 'center',
                    }}
                    item
                >
                    <CodeBlock>
                        # Import TFA class
                        <br />
                        from tfa_python_sdk import TFA
                        <br />
                        <br />
                        # Define your access token and initial auth
                        <br />
                        auth = TFA("access_token")
                        <br />
                        <br />
                        # Authenticate user
                        <br />
                        result = auth.authUser("user_token")
                    </CodeBlock>
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
                            onClick={() => history.push('/sdks')}
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
                        columns={{ md: 2, sm: 2, xs: 1 }}
                        spacing={2}
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
        </Container>
    );
}

export default HomePage;