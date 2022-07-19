import {
    Box,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHead,
    Paper
} from "@mui/material";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

function createDataRow(method, endpoint, details) {
    return {
        method,
        endpoint,
        details,
    };
}

const rows = [
    createDataRow('GET', '/api/access/<AdminToken>/<UserToken>', 'Where you pass variables'),
];

const DocsAPI = () => {
    return (
        <Box>
            <DocsTitle>API docs</DocsTitle>
            <DocsParagraph>
                Main system of our service is the API part. Where the authentication happens!
            </DocsParagraph>
            <DocsSubTitle>Endpoints</DocsSubTitle>
            <DocsParagraph>
                TFA service API provides these endpoints.
            </DocsParagraph>
            <TableContainer component={Paper}>
                <Table
                    sx={{
                        minWidth: 650,
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Method</TableCell>
                            <TableCell>Endpoint</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.endpoint}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.method}
                                </TableCell>
                                <TableCell>{row.endpoint}</TableCell>
                                <TableCell>{row.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <DocsSubTitle>Details about endpoints</DocsSubTitle>
            <DocsParagraph>
                Main endpoint is GET method endpoint that you need to pass 2 params.
            </DocsParagraph>
            <DocsParagraph>
                First Param is you <b>Access Token</b> and second is <b>User Token</b>.
            </DocsParagraph>
            <DocsSubTitle>What will be get?</DocsSubTitle>
            <DocsParagraph>
                What returns to you, is a json object. Most important part, is the status code.
            </DocsParagraph>
            <DocsParagraph>
                You can read status code page in next page.
            </DocsParagraph>
        </Box>
    );
}

export default DocsAPI;