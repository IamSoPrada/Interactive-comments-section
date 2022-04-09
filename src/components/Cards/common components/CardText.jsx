import React from 'react';

function CardText({ children }) {
  return <p className='max-w-xl truncate text-gray-700'>{children}</p>;
}

export default CardText;
