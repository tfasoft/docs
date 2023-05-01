import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import axios from "axios";

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

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}

export default Markdown;
