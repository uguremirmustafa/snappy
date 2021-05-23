import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="grid">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
