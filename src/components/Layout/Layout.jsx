import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Outlet>{children}</Outlet>
    </>
  );
}
export default Layout;
