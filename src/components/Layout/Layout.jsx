import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div className='h-screen'>
      <Header />
      <Outlet>{children}</Outlet>
      <ToastContainer autoClose={2000} />
      <Footer>
        <div className='h-14' />
      </Footer>
    </div>
  );
}
export default Layout;
