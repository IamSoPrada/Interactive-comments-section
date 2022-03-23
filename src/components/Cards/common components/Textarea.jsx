import React from 'react';

function Textarea() {
  return (
    <textarea
      className='text-gray-600 w-full resize-none p-4 text-bold text-md border-2 border-gray-400 transition ease-in-out m-0 rounded-md  focus:text-gray-700 focus:bg-white focus:border-purple-300 focus:outline-none'
      placeholder='Add comment'
      rows='3'
    />
  );
}

export default Textarea;
