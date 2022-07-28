import { Box } from "@mui/material";

const CodeBlock = (props) => {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: "#002240",
                    borderRadius: 2,
                    color: "white",
                    fontSize: 17,
                    fontFamily: "Roboto Mono",
                    p: 3,
                }}
            >
                {
                    props.children
                }
            </Box>
            <br />
        </Box>
    );
}

export default CodeBlock;