import React from 'react';

function CardContainer({ children }) {
  return (
    <div className='bg-slate-50 relative flex flex-col-reverse sm:flex-row justify-between p-7 max-w-3xl w-full rounded-md gap-6 shadow-lg'>
      {children}
    </div>
  );
}

export default CardContainer;
