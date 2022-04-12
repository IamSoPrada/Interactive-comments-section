import React from 'react';

function Footer({ children }) {
  return (
    <footer className='fixed bottom-0 z-40 flex w-full bg-purple-800 md:hidden'>
      {children}
    </footer>
  );
}

export default Footer;
