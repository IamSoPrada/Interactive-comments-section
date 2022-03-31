import React from 'react';

function Avatar({ avatar, classes }) {
  return (
    <div className={`${classes} rounded-full`}>
      <img src={avatar} alt='' />
    </div>
  );
}

export default Avatar;
