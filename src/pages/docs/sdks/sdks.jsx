import {
    Box
} from "@mui/material";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

const SDKsPage = () => {
    return (
        <Box>
            <DocsTitle>SDKs introduction</DocsTitle>
            <DocsParagraph>We created some SDKs for you to do your job easier that ever!</DocsParagraph>
            <DocsSubTitle>What is SDK?</DocsSubTitle>
            <DocsParagraph>
                SDK stands for software development kit or devkit for short. It’s a set of software tools and programs used by developers to create applications for specific platforms.
            </DocsParagraph>
            <DocsParagraph>
                SDK tools will include a range of things, including libraries, documentation, code samples, processes, and guides that developers can use and integrate into their own apps. SDKs are designed to be used for specific platforms or programming languages.
            </DocsParagraph>
            <DocsParagraph>
                Thus you would need an Android SDK toolkit to build an Android app, an iOS SDK to build an iOS app, a VMware SDK for integrating with the VMware platform, or a Nordic SDK for building Bluetooth or wireless products, and so on.
            </DocsParagraph>
            <DocsSubTitle>SDK vs API: Is there a Difference?</DocsSubTitle>
            <DocsParagraph>
                But wait, how is an SDK different from an API?
            </DocsParagraph>
            <DocsParagraph>
                We can define API, also known as an Application Protocol Interface (or Application Programming Interface), as an interface between two pieces of software. Basically, it’s code that allows for clearly defined communication between two separate apps.
            </DocsParagraph>
            <DocsSubTitle>API: the Mailman</DocsSubTitle>
            <DocsParagraph>
                Think of an API as a mailman delivering your app’s request to some other software, and then bringing the response back to your app. A simple example: it’s the API that allows communication between Google Calendar and your travel app so that when a user books a trip, it synchronizes to their calendar.
            </DocsParagraph>
            <DocsSubTitle>SDK: the Post Office/Hardware Store</DocsSubTitle>
            <DocsParagraph>
                Let’s take the metaphor to its logical conclusion here. If the API is a mailman, then what is SDK in that context?
            </DocsParagraph>
            <DocsParagraph>
                It’s the post office AND the hardware store combined.
            </DocsParagraph>
            <DocsParagraph>
                Since it can contain everything necessary to communicate with another software (i.e. one or more APIs) as well as materials that can be used to construct an entirely new app (i.e. code libraries, debugging facilities, technical notes, tutorials, and documentation).
            </DocsParagraph>
            <DocsParagraph>
                This could be a source of confusion for non-developers. After all, if both API and SDK can connect software together, doesn’t that mean they’re essentially the same?
            </DocsParagraph>
            <DocsParagraph>
                In this case, go back to the SDK meaning: it’s a development kit. The SDK can contain one or more APIs plus essential utilities. The API is just one part of an SDK. Think of the devkit as a larger “container” for an entire array of SDK tools and you’ll be correct.
            </DocsParagraph>
        </Box>
    );
}

export default SDKsPage;