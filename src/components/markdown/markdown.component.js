import { useState } from "react";
import ReactMarkdown from "react-markdown";

import axios from "axios";

function Markdown({ path }) {
  const [markdown, setMarkdown] = useState("");

  axios
    .get(path)
    .then((response) => setMarkdown(response.data))
    .catch((error) => console.log("I got error"));

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default Markdown;
