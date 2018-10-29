// Local imports
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

export default (props) => {
  const customStyle = {
    border: '1px solid #e1e5ea',
    borderLeftWidth: '4px',
    borderRadius: '3px',
    background: '#fff',
  };

  return (
    <SyntaxHighlighter
      customStyle={customStyle}
      style={github}
      {...props}
      >{props.children}</SyntaxHighlighter>
  );
};
