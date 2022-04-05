import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext.jsx';

function Header() {
  const { signOut, token } = useContext(AuthContext);
  return (
    <header className='flex w-full bg-purple-800'>
      <div className='flex items-center justify-between w-full px-4 h-16'>
        <Link className='navbar-brand' to='/'>
          Чипсы
        </Link>
        {token && (
          <button type='button' onClick={signOut} className='btn btn-primary'>
            Log out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
