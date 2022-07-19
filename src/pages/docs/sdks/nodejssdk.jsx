import { useHistory } from "react-router-dom";

import {
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
} from "@mui/material";

import { Masonry } from "@mui/lab";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

import importPic from "../../../assets/images/nodejs/nodejs-1-require.png";
import accessPic from "../../../assets/images/nodejs/nodejs-2-access.png";
import authPic from "../../../assets/images/nodejs/nodejs-3-auth.png";
import installPic from "../../../assets/images/nodejs/nodejs-install.png";

const NodeJsSDK = () => {
    const history = useHistory();

    return (
        <Box>
            <DocsTitle>NodeJs SDK</DocsTitle>
            <DocsParagraph>
                You can use this SDK in your ExpressJs applications. And your bots. Also, use it in ReactJs!
            </DocsParagraph>
            <DocsSubTitle>Installation</DocsSubTitle>
            <DocsParagraph>You can install this SDK with NPM.</DocsParagraph>
            <Box
                component="img"
                sx={{
                    width: "35%",
                }}
                alt="Python example"
                src={installPic}
            />
            <br />
            <br />
            <DocsSubTitle>Writing code</DocsSubTitle>
            <Masonry
                spacing={2}
                columns={2}
            >
                <Card
                    variant='outlined'
                >
                    <CardHeader
                        title="Step 1"
                    />
                    <CardContent>
                        <DocsParagraph>After installation you need to require TFA.</DocsParagraph>
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                            }}
                            alt="Python example"
                            src={importPic}
                        />
                    </CardContent>
                </Card>
                <Card
                    variant='outlined'
                >
                    <CardHeader
                        title="Step 2"
                    />
                    <CardContent>
                        <DocsParagraph>Now define your access token.</DocsParagraph>
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                            }}
                            alt="Python example"
                            src={accessPic}
                        />
                    </CardContent>
                </Card>
                <Card
                    variant='outlined'
                >
                    <CardHeader
                        title="Step 3"
                    />
                    <CardContent>
                        <DocsParagraph>Last step, auth user with the user token. Now result have the json object and status code.</DocsParagraph>
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                            }}
                            alt="Python example"
                            src={authPic}
                        />
                    </CardContent>
                </Card>
            </Masonry>
            <DocsTitle>Next step?</DocsTitle>
            <DocsParagraph>
                Now you need to check the status code and if you see 401, check the message. I recommend you to read about status codes and messages in status code page. Link is shown below.
            </DocsParagraph>
            <Divider />
            <br />
            <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                <CardHeader title="References" />
                <CardContent>
                    <Button
                        variant="text"
                        onClick={() => history.push('/docs/codes')}
                    >
                        - Status codes
                    </Button>
                    <br />
                    <Button
                        variant="text"
                        href="https://github.com/tele-fa/tfa-node-sdk"
                    >
                        - SDK source in GitHub
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NodeJsSDK;