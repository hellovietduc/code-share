import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copyToClipboard from '../../utils';

function CopyBtn({ onClick, opacity }) {
  const [buttonText, setButtonText] = useState(null);
  const [innerOpacity, setInnerOpacity] = useState(0);

  const handleClick = () => {
    onClick();
    setButtonText('Copied');
  };

  const handleMouseEnter = () => {
    setInnerOpacity(1);
  };

  const handleMouseLeave = () => {
    setButtonText(null);
    setInnerOpacity(0);
  };

  return (
    <button
      className="absolute top-0 right-0 text-center bg-transparent rounded-lg py-2 px-3 outline-none text-sm text-white"
      style={{ opacity: innerOpacity || opacity }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText || 'Copy'}
    </button>
  );
}

CopyBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  opacity: PropTypes.number
};

function CodeArea({ code, language }) {
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleCopyBtnClick = () => {
    copyToClipboard(code);
  };

  return (
    <div className="flex justify-center">
      <div className="relative m-4 w-full">
        <SyntaxHighlighter
          className="my-0 rounded-lg"
          style={darcula}
          language={language}
          showLineNumbers
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {code}
        </SyntaxHighlighter>
        <CopyBtn
          opacity={opacity}
          onClick={handleCopyBtnClick}
        />
      </div>
    </div>
  );
}

CodeArea.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string
};

export default CodeArea;
