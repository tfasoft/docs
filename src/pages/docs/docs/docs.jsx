import {
    Box,
} from "@mui/material";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

const Docs = () => {
    return (
        <Box>
            <DocsTitle>Docs introduction</DocsTitle>
            <DocsParagraph>
                As you know, TFA is a service to authenticate users via Telegram. You can use this service in your applications to have a fast, scalable and easy authentication.
            </DocsParagraph>
            <DocsParagraph>
                In this documentation, you will know about how is our API working.
            </DocsParagraph>
            <DocsSubTitle>Do I need to learn this API?</DocsSubTitle>
            <DocsParagraph>
                Well, we just created this docs for you to know our endpoints and way the API works. You can use SDKs and we recommend you to use SDKs.
            </DocsParagraph>
            <DocsParagraph>
                If you use SDKs, you will write less.
            </DocsParagraph>
        </Box>
    );
}

export default Docs;