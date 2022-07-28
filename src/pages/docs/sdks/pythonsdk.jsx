import { useHistory } from "react-router-dom";

import {
    Box, Button,
    Card,
    CardContent, CardHeader, Divider,
} from "@mui/material";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

import CodeBlock from "../../../components/codeblock";

const PythonSDK = () => {
    const history = useHistory();

    return (
        <Box>
            <DocsTitle>Python SDK</DocsTitle>
            <DocsParagraph>
                If you are creating your application with Flask or Django, or even a cli or gui, you can use Python SDK instead of doing things manually.
            </DocsParagraph>
            <DocsSubTitle>Installation</DocsSubTitle>
            <DocsParagraph>You can install this SDK with PIP.</DocsParagraph>
            <CodeBlock>
                $ pip3 install tfa-python-sdk
            </CodeBlock>
            <DocsSubTitle>Writing code</DocsSubTitle>
            <DocsParagraph>1) After installation you need to import the class.</DocsParagraph>
            <CodeBlock>
                # Import TFA class
                <br />
                from tfa_python_sdk import TFA
            </CodeBlock>
            <DocsParagraph>2) Now define your access token.</DocsParagraph>
            <CodeBlock>
                # Import TFA class
                <br />
                from tfa_python_sdk import TFA
                <br />
                <br />
                # Define your access token and initial auth
                <br />
                auth = TFA("access_token")
            </CodeBlock>
            <DocsParagraph>3) Last step, auth user with the user token. Now result have the json object and status code.</DocsParagraph>
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
                        href="https://github.com/tfasoft/sdk-python"
                    >
                        - SDK source in GitHub
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default PythonSDK;