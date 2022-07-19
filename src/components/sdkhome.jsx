import { useHistory } from "react-router-dom";
import { useState } from "react";

import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Avatar,
} from "@mui/material";

const HomeSDKsComponent = (props) => {
    const history = useHistory();

    const sdk = props.sdk;

    return (
        <Card
            elevation={5}
            onClick={() => history.push(`/sdks/${sdk.href}`)}
            sx={{
                cursor: "pointer",
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        variant="square"
                        src={sdk.logo}
                    />
                }
                title={sdk.title}
            />
            <CardContent>
                <Typography
                    paragraph
                >
                    {sdk.details}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HomeSDKsComponent;