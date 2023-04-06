import { Markdown } from "@/components";
import { DocsLayout } from "@/layouts";

import { Box } from "@mui/material";

export async function getServerSideProps({ params }) {
  const path = params.path.join("/");

  const madePath = `https://raw.githubusercontent.com/tfasoft/docs/main/src/md/${path}`;

  return { props: { madePath } };
}

export default function Docs({ madePath }) {
  return (
    <DocsLayout>
      <Box className="markdown">
        <Markdown path={madePath} />
      </Box>
    </DocsLayout>
  );
}
