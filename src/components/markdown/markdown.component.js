import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import axios from "axios";

import { Loader } from "@/components";

function Markdown({ path }) {
  const [markdown, setMarkdown] = useState("");

  const error404 = `
  # Not found
  
  Sorry, this page is not found
  `;

  axios
    .get(path)
    .then((response) => setMarkdown(response.data))
    .catch(() => setMarkdown(error404));

  return markdown ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
  ) : (
    <Loader />
  );
}

export default Markdown;
