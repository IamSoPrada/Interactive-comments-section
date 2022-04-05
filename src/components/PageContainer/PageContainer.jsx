import React from 'react';

function PageContainer({ children }) {
  return (
    <div className='container flex flex-col items-center px-4 min-h-screen gap-4'>
      {children}
    </div>
  );
}

export default PageContainer;
