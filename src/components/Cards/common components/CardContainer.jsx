import React from 'react';

function CardContainer({ children, classes }) {
  return (
    <div
      className={`${classes} relative flex flex-col-reverse sm:flex-row justify-between p-7 max-w-3xl w-full rounded-md gap-6 shadow-lg z-20`}
    >
      {children}
    </div>
  );
}

export default CardContainer;
