import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0
    ? document.getSelection().getRangeAt(0)
    : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

function CopyButton({ onClick, opacity }) {
  const [buttonText, setButtonText] = useState('Copy');
  const [innerOpacity, setInnerOpacity] = useState(0);
  return (
    <button
      className="absolute top-0 right-0 text-center bg-transparent rounded-lg py-2 px-3 outline-none text-sm text-white"
      style={{ opacity: innerOpacity || opacity }}
      onClick={() => {
        onClick();
        setButtonText('Copied');
      }}
      onMouseEnter={() => {
        setInnerOpacity(1);
      }}
      onMouseLeave={() => {
        setButtonText('Copy');
        setInnerOpacity(0);
      }}
    >
      {buttonText}
    </button>
  );
}

CopyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  opacity: PropTypes.number
};

function CodeArea({ code, language }) {
  const [opacity, setOpacity] = useState(0);
  return (
    <div className="flex justify-center">
      <div className="relative m-8 w-6/12">
        <SyntaxHighlighter
          className="my-0 rounded-lg"
          style={darcula}
          language={language}
          showLineNumbers
          onMouseEnter={() => {
            setOpacity(1);
          }}
          onMouseLeave={() => {
            setOpacity(0);
          }}
        >
          {code}
        </SyntaxHighlighter>
        <CopyButton
          opacity={opacity}
          onClick={() => {
            copyToClipboard(code);
          }}
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
