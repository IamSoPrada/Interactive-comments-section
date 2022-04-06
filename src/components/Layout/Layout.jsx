import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Outlet>{children}</Outlet>
      <ToastContainer autoClose={2000} />
    </>
  );
}
export default Layout;
