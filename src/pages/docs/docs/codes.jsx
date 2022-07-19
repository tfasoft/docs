import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
} from "@mui/material";

import DocsTitle from "../../../components/text/docstitle";
import DocsSubTitle from "../../../components/text/docssubtitle";
import DocsParagraph from "../../../components/text/docsparagraph";

import WrongAdmin from "../../../assets/images/wrong-admin.png";
import WrongUser from "../../../assets/images/wrong-user.png";

function createDataRow(code, status, details) {
    return {
        code,
        status,
        details,
    };
}

const rows = [
    createDataRow('200', 'Authenticated', 'Both Access Token and User Token is corract'),
    createDataRow('401', 'Authentication Error', 'User Token or Access Token us wrong.'),
];

const DocsCodes = () => {
    return (
        <Box>
            <DocsTitle>Status codes</DocsTitle>
            <DocsParagraph>
                Status codes, things that are simple and you need to know.
            </DocsParagraph>
            <DocsSubTitle>Codes</DocsSubTitle>
            <TableContainer component={Paper}>
                <Table
                    sx={{
                        minWidth: 650,
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Code</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.code}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.code}
                                </TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <DocsSubTitle>Details about status codes</DocsSubTitle>
            <DocsParagraph>
                <b>200 Code.</b>. It means that admin acess token and user token both are true.
            </DocsParagraph>
            <DocsParagraph>
                <b>401 Code.</b>. Now, one of the tokens are wrong. But, how to understant it?
            </DocsParagraph>
            <DocsSubTitle>Check which token is wrong</DocsSubTitle>
            <DocsParagraph>
                What returns to you, is a json object and there is a message key. That message tell you that which of them is wrong.
            </DocsParagraph>
            <Grid
                columns={{ xs:6, md: 12 }}
                spacing={2}
                container
            >
                <Grid
                    xs={6}
                    item
                >
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                        }}
                        alt="Python example"
                        src={WrongAdmin}
                    />
                </Grid>
                <Grid
                    xs={6}
                    item
                >
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                        }}
                        alt="Python example"
                        src={WrongUser}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default DocsCodes;