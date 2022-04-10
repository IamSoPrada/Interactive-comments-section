import React, { useRef, useEffect } from 'react';

function Textarea({ onChange, value }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <textarea
      ref={inputRef}
      onChange={onChange}
      value={value}
      className='text-gray-600 w-full resize-none p-4 text-bold text-md transition ease-in-out m-0 rounded-md  focus:text-gray-700 focus:bg-white focus:border-purple-300 focus:outline-none'
      placeholder='Add comment'
      rows='3'
      cols='20'
      maxLength='300'
    />
  );
}

export default Textarea;
