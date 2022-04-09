import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '../../../images/icon-logout.svg';
import BellIcon from '../../../images/icon-bell.svg';
import ActionButton from '../Cards/common components/ActionButton';
import AuthContext from '../../contexts/authContext.jsx';

function Header() {
  const { signOut, token } = useContext(AuthContext);
  return (
    <header className='flex w-full bg-purple-800'>
      <div className='flex items-center justify-between w-full px-4 h-16'>
        <Link className='px-6' to='/'>
          <img className='w-6 h-6 w-full' src={BellIcon} alt='' />
        </Link>
        <div className='flex gap-4 align-center'>
          <Link className='' to='/'>
            <svg
              className='w-10 h-10'
              fill='#F0F757'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </Link>
        </div>

        {token && (
          <ActionButton classes='' type='button' onClick={signOut}>
            <img className='w-8 h-8' src={LogoutIcon} alt='' />
          </ActionButton>
        )}
      </div>
    </header>
  );
}

export default Header;
