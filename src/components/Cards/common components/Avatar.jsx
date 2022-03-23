import React from 'react';

function Avatar({ avatar, classes }) {
  return (
    <div className={`${classes} rounded-full  bg-slate-500`}>
      <img src={avatar} alt='' />
    </div>
  );
}

export default Avatar;
