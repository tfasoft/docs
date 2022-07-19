import { Typography } from "@mui/material";

const DocsParagraph = (props) => {
    const text = props.children;

    return(
        <Typography
            variant="body1"
            color="text.secondary"
        >
            {text}
        </Typography>
    );
}

export default DocsParagraph;