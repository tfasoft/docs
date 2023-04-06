import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import axios from "axios";

function MarkdownFile({ path }) {
  const [markdown, setMarkdown] = useState("");

  axios
    .get(path)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((data) => setMarkdown(data))
      .catch((error) => console.error(error));
  }, [path]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default MarkdownFile;
