import {
    Box,
    Typography,
    Grid,
} from "@mui/material";

import {
    Masonry,
} from "@mui/lab";
import HomeSDKsComponent from "../components/sdkhome";

import PythonIcon from '../assets/svg/python.svg';
import NodeJsIcon from '../assets/svg/nodejs.svg';
import LaravelIcon from '../assets/svg/laravel.svg';
import MicrosoftIcon from '../assets/svg/microsoft.svg';

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
            <Box>
                <Typography
                    color="primary"
                    variant="h3"
                    gutterBottom
                >
                    TFA Docs
                </Typography>
                <Typography
                    paragraph
                    gutterButton
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
                </Typography>
            </Box>
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
                            paragraph
                            gutterButton
                        >
                            We developed some SKDs for developers to use our APIs easily ❤️
                        </Typography>
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