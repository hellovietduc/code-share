import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copyToClipboard from '../../utils';

function CopyBtn({ copyValue }) {
  const [copyBtnText, setCopyBtnText] = useState(null);

  const handleClick = () => {
    copyToClipboard(copyValue);
    setCopyBtnText('Copied link');
  };

  const handleMouseLeave = () => {
    setCopyBtnText(null);
  };

  return (
    <button
      className="flex mx-auto my-2 text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {copyBtnText || 'Copy link'}
    </button>
  );
}

CopyBtn.propTypes = {
  copyValue: PropTypes.string
};

export default CopyBtn;
