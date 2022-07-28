import { useHistory } from "react-router-dom";

import {
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
} from "@mui/material";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

import CodeBlock from "../../../components/codeblock";

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
            <CodeBlock>
                $ npm i tfa-node-sdk
            </CodeBlock>
            <DocsSubTitle>Writing code</DocsSubTitle>
            <DocsParagraph>1) After installation you need to require TFA.</DocsParagraph>
            <CodeBlock>
                // Require TFA class
                <br />
                const tfa = require("tfa-node-sdk");
            </CodeBlock>
            <DocsParagraph>2) Now define your access token.</DocsParagraph>
            <CodeBlock>
                // Require TFA class
                <br />
                const tfa = require("tfa-node-sdk");
                <br />
                <br />
                // Define your access token and initial auth
                <br />
                const auth = new tfa("access_token");
            </CodeBlock>
            <DocsParagraph>3) Last step, auth user with the user token. Now result have the json object and status code.</DocsParagraph>
            <CodeBlock>
            // Require TFA class
                <br />
                const tfa = require("tfa-node-sdk");
                <br />
                <br />
                // Define your access token and initial auth
                <br />
                const auth = new tfa("access_token");
                <br />
                <br />
                // Authenticate user
                <br />
                const result = auth.authUser("user_token");
            </CodeBlock>
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
                        href="https://github.com/tfasoft/sdk-node"
                    >
                        - SDK source in GitHub
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NodeJsSDK;