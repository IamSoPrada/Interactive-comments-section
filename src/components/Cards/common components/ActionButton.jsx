import React from 'react';

function ActionButton({ children, classes }) {
  return (
    <button
      type='button'
      className={`${
        classes && classes
      } bg-purple-800 block max-w-max text-gray-50 rounded-md px-6 py-3 font-bold uppercase`}
    >
      <span>{children}</span>
    </button>
  );
}

export default ActionButton;
