import { useRouter } from "next/router";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from "@mui/material";

const SDK = (props) => {
  const history = useRouter();

  const sdk = props.sdk;

  return (
    <Card
      elevation={5}
      onClick={() => history.push(sdk.href)}
      sx={{
        cursor: "pointer",
      }}
    >
      <CardHeader
        avatar={<Avatar variant="square" src={sdk.logo.src} />}
        title={sdk.title}
      />
      <CardContent>
        <Typography paragraph>{sdk.details}</Typography>
      </CardContent>
    </Card>
  );
};

export default SDK;
