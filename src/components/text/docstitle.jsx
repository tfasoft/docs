import { Typography } from "@mui/material";

const DocsTitle = (props) => {
    const text = props.children;

    return(
        <Typography
            variant="h4"
            color="primary"
        >
            {text}
        </Typography>
    );
}

export default DocsTitle;