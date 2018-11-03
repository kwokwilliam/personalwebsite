import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as style } from 'react-syntax-highlighter/styles/hljs'

/**
 * CodeBlock sourced from https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093
 */
export default class CodeBlock extends React.PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string,
    }

    static defaultProps = {
        language: null,
    }

    render() {
        const { language, value } = this.props;

        return (
            <SyntaxHighlighter language={language}
                style={style}
                showLineNumbers>
                {value}
            </SyntaxHighlighter>
        );
    }
}