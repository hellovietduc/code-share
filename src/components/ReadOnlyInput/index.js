import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function ReadOnlyInput({ value }) {
  const input = useRef();
  return (
    <input
      className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
      value={value}
      type="text"
      readOnly
      ref={input}
      onClick={() => {
        input.current.focus();
        input.current.select();
      }}
    />
  );
}

ReadOnlyInput.propTypes = {
  value: PropTypes.string.isRequired
};

export default ReadOnlyInput;
