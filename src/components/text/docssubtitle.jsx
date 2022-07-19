import { Typography } from "@mui/material";

const DocsSubTitle = (props) => {
    const text = props.children;

    return(
        <Typography
            variant="h6"
            color="primary"
        >
            {text}
        </Typography>
    );
}

export default DocsSubTitle;