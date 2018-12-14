import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as style } from 'react-syntax-highlighter/styles/hljs'

/**
 * CodeBlock sourced from https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093
 */
export default function CodeBlock({ language, value }) {
    return (
        <SyntaxHighlighter language={language || 'js'}
            style={style}
            showLineNumbers>
            {value}
        </SyntaxHighlighter>
    );
}