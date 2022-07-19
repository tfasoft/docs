import { CodeBlock, github } from "react-code-blocks";

const TFACodeBlock = (props) => {
    return (
        <CodeBlock
            theme={github}
            text={props.code}
            language={props.language}
            showLineNumbers={false}
            wrapLines
        />
    );
}

export default TFACodeBlock;