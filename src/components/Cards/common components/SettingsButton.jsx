import React from 'react';

function SettingsButton({ icon, children, classes }) {
  return (
    <button
      type='button'
      className={`absolute ${classes} sm:static  rounded-md px-4 py-1 flex gap-2 items-center `}
    >
      <img src={icon} alt='logo' />
      <span>{children}</span>
    </button>
  );
}

export default SettingsButton;
